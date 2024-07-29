import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginLogout from './Components/LoginLogout';
import Dashboard from './Components/Dashboard';
import ReadExcel from './Components/ReadExcel';
import ReadExcel2 from './Components/ReadExcel2';
import Tabledata from './Components/Tabledata';
import DashBoardData from './Components/DashBoardData';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginLogout />} />
        <Route path='/brainlyAiScreener' element={<Dashboard />}>
          <Route path='bar' element={<ReadExcel />} />
          <Route path='line' element={<ReadExcel2 />} />
          <Route path='table' element={<Tabledata />} />
          <Route path='dash' element={<DashBoardData   />} />
          <Route path='barchart' element={<BarChart />} />
          <Route path='linechart' element={<LineChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
