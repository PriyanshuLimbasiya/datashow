import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import FileInput from './FileInput';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ReadExcel = () => {
    const [chartData, setChartData] = useState(null);

    const handleFileSelect = (data) => {
        const counts = {};

        data.slice(1).forEach(row => {
            const companyName = row[0];
            const transactionType = row[11];

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
                backgroundColor: values.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(192, 75, 75, 0.6)'),
            }],
        });
    };

    return (
        <div>
            <FileInput onFileSelect={handleFileSelect} />
            <div style={{ position: 'relative', width: '76vw', height: '80vh' }}>
                {chartData && (
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: function (tooltipItem) {
                                            const value = tooltipItem.raw;
                                            return `${tooltipItem.label}: ${Math.abs(value)}`;
                                        }
                                    }
                                },
                                datalabels: {
                                    display: true,
                                    color: 'black',
                                    align: 'end',
                                    anchor: 'end',
                                    formatter: (value, context) => {
                                        return Math.abs(value); // or customize the label text as needed
                                    }
                                }
                            }
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default ReadExcel;
