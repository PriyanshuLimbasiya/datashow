import React from 'react';
import ReadExcel from './ReadExcel';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='container-fluid vh-100'>
      <div className="d-flex flex-column vh-100">
        <Navbar />
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <div className="p-4 vw-100">
            <ReadExcel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
