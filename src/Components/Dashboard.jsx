import React from 'react';
import ReadExcel from './ReadExcel'; // Bar chart 
import ReadExcel2 from './ReadExcel2'; // Line chart
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='container-fluid vh-100'>
      <div className="row h-100">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-2 h-100">
          <Sidebar />
        </div>
        <div className="col-10 h-100 p-4">
          <div className="row h-100">
            <div className="col-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <ReadExcel />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card h-100">
                <div className="card-body">
                  <ReadExcel2 />
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
