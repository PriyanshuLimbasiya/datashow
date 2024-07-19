import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/soho-light/theme.css';
import './LoginLogout.css';
import './Tabledata.css';

const Table = () => {
    const [tabledata, settabledata] = useState([]);
    const [fetchdata, setfetchdata] = useState(true);

    const apiurl = "https://thinkbeyondidea.com/aejewel-shared/PublicApi/GetAllData";

    useEffect(() => {
        axios.post(apiurl)
            .then((response) => {
                setfetchdata(false);
                console.log(response.data);
                settabledata(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setfetchdata(false);
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
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">Trade Data</h4>
                </div>
                <div className="card-body">
                    <DataTable
                        value={tabledata}
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25]}
                        tableStyle={{ minWidth: '50rem' }}
                        filterDisplay="menu"
                        className="p-datatable-sm"
                        style={{ fontSize: '12.4px' }}
                    >
                        <Column field="symbol" header="Symbol" sortable filter filterPlaceholder="Search by symbol"></Column>
                        <Column field="company" header="Company" sortable filter filterPlaceholder="Search by company"></Column>
                        <Column field="nameOfTheAcquirer_Disposer" sortable header="Acquirer Disposer" filter filterPlaceholder="Search by acquirer/disposer"></Column>
                        <Column field="noOfSecurities_Acquired_Displosed" sortable header="No of Security Acquired" filter filterPlaceholder="Search by no of securities acquired"></Column>
                        <Column field="noOfSecurity_Post" header="Security Post" sortable filter filterPlaceholder="Search by security post"></Column>
                        <Column field="acquisition_DisposalTransactionType" header="Transaction Type" sortable filter filterPlaceholder="Search by transaction type"></Column>
                        <Column field="categoryOfPerson" header="Category Of Person" sortable filter filterPlaceholder="Search by category"></Column>
                        <Column field="noOfSecurity_Prior" header="Quantity" sortable filter filterPlaceholder="Search by quantity"></Column>
                        <Column field="modeOfAcquisition" header="Mode Of Acquisition" sortable filter filterPlaceholder="Search by mode of acquisition"></Column>
                        <Column field="dateOfAllotment_AcquisitionFrom" header="Date of Acquisition From" sortable filter filterPlaceholder="Search by date"></Column>
                        
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default Table;
