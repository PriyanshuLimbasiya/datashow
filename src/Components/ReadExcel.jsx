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
            const value = row[0];
            if (counts[value]) {
                counts[value]++;
            } else {
                counts[value] = 1;
            }
        });

        const labels = Object.keys(counts);
        const values = Object.values(counts);

        setChartData({
            labels: labels,
            datasets: [{
                label: 'Sample',
                data: values,
                borderColor: 'rgb(247, 125, 10)',
                backgroundColor: 'rgb(196, 187, 169)',
            }],
        });
    };

    return (
        <div>
            <FileInput onFileSelect={handleFileSelect} />
            <div style={{ position: 'relative', width: '80vw', height: '80vh' }}>
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
        </div>
    );
};

export default ReadExcel;
