import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../App.css';

const Dashboard = () => {
  return (
    <div className='container-fluid vh-100'>
      <div className="row h-100">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-12 col-md-2 bg-light h-100 p-0 border-end">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10 h-100 p-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
