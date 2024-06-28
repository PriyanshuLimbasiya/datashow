import React from 'react';
import { House, Clipboard, Cart, People, BarChart, Puzzle, FileText, Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <House className="me-2" />
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <Clipboard className="me-2" />
                        Orders
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <Cart className="me-2" />
                        Products
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <People className="me-2" />
                        Customers
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <BarChart className="me-2" />
                        Reports
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <Puzzle className="me-2" />
                        Integrations
                    </a>
                </li>
            </ul>
            <hr />
            <div className="mb-3">
                <span className="text-muted">SAVED REPORTS</span>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark">
                            <FileText className="me-2" />
                            Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark">
                            <FileText className="me-2" />
                            Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark">
                            <FileText className="me-2" />
                            Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark">
                            <FileText className="me-2" />
                            Year-end sale
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="nav nav-pills flex-column mt-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark">
                        <Gear className="me-2" />
                        Settings
                    </a>
                </li>
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link text-dark">
                        <BoxArrowRight className="me-2" />
                        Sign out
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
