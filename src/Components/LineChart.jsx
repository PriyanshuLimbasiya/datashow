import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ProgressSpinner } from 'primereact/progressspinner';
import { fetchLineData } from './Services/ReadExcelService';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const LineChart = () => {
    const [chartData, setChartData] = useState(null);
    const [fetchdata, setfetchdata] = useState(true);

    useEffect(() => {
        fetchLineData()
            .then(data => {
                setfetchdata(false);
                const count = {};
                data.forEach(row => {
                    const value = row.symbol;
                    if (count[value])
                    {
                        count[value]++;
                    }
                    else
                    {
                        count[value] = 1
                    }
                })
                const labels = Object.keys(count);
                const values = Object.values(count);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Count',
                        data: values,
                        borderColor: 'rgb(43, 102, 9)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }]
                })
            })

    }, [])

    if (fetchdata) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" animationDuration=".5s" aria-label='loading' />
            </div>
        );
    }

    return (
        <div>
            <div style={{ position: 'relative', width: '76vw', height: '70vh'}}>
                {chartData && (
                    <Line
                        style={{ color:'#2b6609'}}
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,

                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default LineChart