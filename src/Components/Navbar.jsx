import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light fw-bold" to="dash">
          BrainyAIScreener
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
