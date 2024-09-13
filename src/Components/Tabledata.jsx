import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/soho-light/theme.css';
import { fetchTableData } from './Services/TableService';

const Table = () => {
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchTableData();
                setTableData(data);
                setLoading(false);
            } catch (error) {
                console.log("Error:", error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" animationDuration=".5s" aria-label="Loading" />
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">Trade Data</h4>
                </div>
                <div className="card-body">
                    <DataTable
                        value={tableData}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 15, 25]}
                        responsiveLayout="scroll"
                        className="p-datatable-sm"
                        style={{ fontSize: '14px' }}
                    >
                        <Column field="symbol" header="Symbol" sortable filter filterPlaceholder="Search by symbol"></Column>
                        <Column field="company" header="Company" sortable filter filterPlaceholder="Search by company"></Column>
                        <Column field="nameOfTheAcquirer_Disposer" header="Acquirer/Disposer" sortable filter filterPlaceholder="Search by acquirer/disposer"></Column>
                        <Column field="noOfSecurities_Acquired_Displosed" header="No. of Securities Acquired" sortable filter filterPlaceholder="Search by no. of securities"></Column>
                        <Column field="noOfSecurity_Post" header="Security Post" sortable filter filterPlaceholder="Search by security post"></Column>
                        <Column field="acquisition_DisposalTransactionType" header="Transaction Type" sortable filter filterPlaceholder="Search by transaction type"></Column>
                        <Column field="categoryOfPerson" header="Category of Person" sortable filter filterPlaceholder="Search by category"></Column>
                        <Column field="noOfSecurity_Prior" header="Quantity Prior" sortable filter filterPlaceholder="Search by quantity prior"></Column>
                        <Column field="modeOfAcquisition" header="Mode of Acquisition" sortable filter filterPlaceholder="Search by mode of acquisition"></Column>
                        <Column field="dateOfAllotment_AcquisitionFrom" header="Date of Acquisition" sortable filter filterPlaceholder="Search by date"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default Table;
