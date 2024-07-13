import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
    const [tabledata, settabledata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const apiurl = "https://thinkbeyondidea.com/aejewel-shared/PublicApi/GetAllData";

    useEffect(() => {
        axios.post(apiurl)
            .then((response) => {
                console.log("API Response:", response.data);
                settabledata(response.data);
                setFilteredData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const columns = [
        {
            name: 'Index',
            cell: (row, index) => index + 1,

        },
        {
            name: 'Symbol',
            selector: row => row.symbol,
            sortable: true,
        },
        {
            name: 'Company',
            selector: row => row.company,
            sortable: true,
        },
        {
            name: 'Acquirer Disposer',
            selector: row => row.nameOfTheAcquirer_Disposer,

        },
        {
            name: 'No of Security Acquired',
            selector: row => row.noOfSecurities_Acquired_Displosed,

        },
        {
            name: 'Category Of Person',
            selector: row => row.categoryOfPerson,

        },
        {
            name: 'Security Prior',
            selector: row => row.noOfSecurity_Prior,

        },
        {
            name: 'Transaction Type',
            selector: row => row.acquisition_DisposalTransactionType,

        },
        {
            name: 'Security Post',
            selector: row => row.noOfSecurity_Post,

        },
        {
            name: 'Mode Of Acquisition',
            selector: row => row.modeOfAcquisition,

        },
        {
            name: 'Date of Acquisition From',
            selector: row => row.dateOfAllotment_AcquisitionFrom,

        },
    ];

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchText(value);

        const filtered = tabledata.filter(item => {
            return (
                item.symbol.toLowerCase().includes(value.toLowerCase()) ||
                item.company.toLowerCase().includes(value.toLowerCase())
            );
        });

        setFilteredData(filtered);
    };

    return (
        <div className="container mt-5">
            <DataTable
                title="Acquisition Data"
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover={true}
                subHeader
                
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control w-25 me-auto"
                        value={searchText}
                        onChange={handleSearch}
                    />
                }
            />
        </div>
    );
};

export default Table;
