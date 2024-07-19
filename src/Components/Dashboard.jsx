import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../App.css'

const Dashboard = () => {
  return (
    <div className='container-fluid vh-100'>
      <div className="row h-100">
        <div className="col-md-12">
          <Navbar />
        </div>
        <div className="col-md-2 h-100">
          <Sidebar />
        </div>
        <div className="col-md-10 h-100">
          <div className="row h-100">
            <div className="col-md-12 mb-4">
              <div className="card h-100">
                <div className="card-body beg">
                  <Outlet/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
