import React from 'react';
import { House, Clipboard, Cart,Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
            <ul className="nav  flex-column mb-auto">
                <li className="nav-item">
                    <a  className="nav-link text-dark ">
                        <House className="me-2"/>
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <NavLink to={"bar"} className="nav-link text-dark">
                        <Clipboard className="me-2"/>
                        Qaurterly Data
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"line"} className="nav-link text-dark">
                        <Cart className="me-2"/>
                        Analyze Data
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"table"} className="nav-link text-dark">
                        <Gear className="me-2"/>
                        Settings
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link text-dark">
                        <BoxArrowRight className="me-2"/>
                        Sign out
                    </NavLink>
                </li>
            </ul>
            <hr />


        </div>
    );
};

export default Sidebar;
