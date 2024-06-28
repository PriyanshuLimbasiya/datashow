import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginLogout from './Components/LoginLogout';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LoginLogout/>} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
