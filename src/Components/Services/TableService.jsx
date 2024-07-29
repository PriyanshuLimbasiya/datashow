
import axios from 'axios';

const apiurl = "https://thinkbeyondidea.com/aejewel-shared/PublicApi/GetAllData";

export const fetchTableData = async () => {
    try {
        const response = await axios.post(apiurl);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the data!", error);
        throw error;
    }
};
