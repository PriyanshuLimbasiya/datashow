import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FileInput from './FileInput';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
                label: 'Count',
                data: values,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }],
        });
    };

    return (
        <div>
            <FileInput onFileSelect={handleFileSelect} />
            <div style={{ position: 'relative', width: '80vw', height: '80vh' }}>
                {chartData && (
                    <Line
                        data={chartData}
                    />
                )}
            </div>
        </div>
    );
};

export default ReadExcel;
