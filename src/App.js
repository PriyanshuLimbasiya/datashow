import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginLogout from './Components/LoginLogout';
import Dashboard from './Components/Dashboard';
import ReadExcel from './Components/ReadExcel';
import ReadExcel2 from './Components/ReadExcel2';
import Tabledata from './Components/Tabledata';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginLogout />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='bar' element={<ReadExcel />} />
          <Route path='line' element={<ReadExcel2 />} />
          <Route path='table' element={<Tabledata/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
