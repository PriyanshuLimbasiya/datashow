import axios from 'axios';

const barApiUrl = "https://thinkbeyondidea.com/aejewel-shared/PublicApi/GetAllBar";
const lineApiUrl = "https://thinkbeyondidea.com/aejewel-shared/PublicApi/GetAllLine";

//Bar Chart Data
export const fetchBarData = () => {
    return axios.post(barApiUrl)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching bar data:", error);
            throw error;
        });
};

//Line Chart Data
export const fetchLineData = () => {
    return axios.post(lineApiUrl)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching line data:", error);
            throw error;
        });
};
