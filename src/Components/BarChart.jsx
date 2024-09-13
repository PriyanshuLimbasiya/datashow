import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ProgressSpinner } from 'primereact/progressspinner';
import { fetchBarData } from './Services/ReadExcelService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [fetchdata, setfetchdata] = useState(true);

  useEffect(() => {
    fetchBarData()
      .then(data => {
        setfetchdata(false);

        // Aggregating counts for each company
        const counts = {
          Buy: {},
          Sell: {},
          BuyAmount: {},
          SellAmount: {},
        };


        data.forEach(row => {
          const companyName = row.SYMBOL;
          const sellCount = row.count_Sell;
          const buyCount = row.count_Buy;
          const sellAmount = row.sum_Buy;
          const buyAmount = row.sum_Sell

          if (!counts.Sell[companyName]) {
            counts.Sell[companyName] = 0;
          }
          if (!counts.Buy[companyName]) {
            counts.Buy[companyName] = 0;
          }

          counts.Sell[companyName] += sellCount;
          counts.Buy[companyName] += buyCount;
          counts.SellAmount[companyName] += sellAmount;
          counts.BuyAmount[companyName] += buyAmount
        });

        // Creating labels and data arrays
        const labels = [...new Set([...Object.keys(counts.Sell), ...Object.keys(counts.SellAmount), ...Object.keys(counts.Buy), ...Object.keys(counts.BuyAmount)])];
        const sellValues = labels.map(label => counts.Sell[label] || 0);
        const buyValues = labels.map(label => counts.Buy[label] || 0);
        const sellV = labels.map(label => counts.SellAmount[label]);
        const buyV = labels.map(label => counts.BuyAmount[label]);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Buy Counts',
              data: buyValues,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Sell Counts',
              data: sellValues,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
          ],
        });
      })
      .catch(e => {
        console.error("Error:", e);
      });
  }, []);

  if (fetchdata) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" animationDuration=".5s" aria-label='loading' />
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '76vw', height: '80vh' }}>
      {chartData && (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },

            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              }
            }
          }}
        />
      )}
    </div>
  );
};

export default BarChart;