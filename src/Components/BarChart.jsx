// src/BarChart.js
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
        const counts = {};

        data.forEach(row => {
          const companyName = row.symbol;
          const transactionType = row.acquisition_DisposalTransactionType;

          if (!counts[companyName]) {
            counts[companyName] = 0;
          }

          if (transactionType === "Buy") {
            counts[companyName]++;
          } else if (transactionType === "Sell") {
            counts[companyName]--;
          }
        });

    
        const labels = Object.keys(counts);
        const values = Object.values(counts);

        setChartData({
          labels: labels,
          datasets: [{
            label: 'Transaction Counts',
            data: values,
            borderColor: 'rgb(247, 125, 10)',
            backgroundColor: values.map(value => value >= 0 ? 'rgba(127, 0, 255, 0.6)' : 'rgba(192, 75, 75, 0.6)'),
          }],
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

          }}
        />
      )}
    </div>
  );
};

export default BarChart;
