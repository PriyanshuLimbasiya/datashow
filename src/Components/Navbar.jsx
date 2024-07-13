import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body text-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="nav-link text-dark" to={"/"}><span className="navbar-brand mb-0 fs-6">Company Name</span></NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar