import React from 'react';
import { House, Clipboard, Cart, BoxArrowRight, DatabaseCheck, BarChart, GraphUp } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column p-3 bg-light custom-sidebar" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
            <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"dash"}>
                        <House className="me-2" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"bar"}>
                        <Clipboard className="me-2" />
                        <span>Quarterly Data</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"line"}>
                        <Cart className="me-2" />
                        <span>Analyze Data</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"table"}>
                        <DatabaseCheck className="me-2" />
                        <span>Trade Data</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"barchart"}>
                        <BarChart className="me-2" />
                        <span>BarChart</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center" to={"linechart"}>
                        <GraphUp className="me-2" />
                        <span>LineChart</span>
                    </NavLink>
                </li>
                <li className="nav-item mt-auto">
                    <NavLink className="nav-link custom-nav-link d-flex align-items-center text-danger" to={'/'}>
                        <BoxArrowRight className="me-2" />
                        <span>Sign out</span>
                    </NavLink>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default Sidebar;
