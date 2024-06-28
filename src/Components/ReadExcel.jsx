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
        const labels = data.slice(1).map(row => row[0]); 
        const values = data.slice(1).map(row => row[1]); 

        setChartData({
            labels: labels,
            datasets: [{
                label: 'Company', 
                data: values,
                borderColor: 'rgb(240, 193, 7)',
                backgroundColor: 'rgba(75,192,192,0.6)',
            }],
            
        });
    };

    return (
        <div>
            <FileInput onFileSelect={handleFileSelect} />
            <div className='vw-75'>
                {chartData && (
                    <Line   data={chartData} />
                )}
            </div>
        </div>
    );
};

export default ReadExcel;
