import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
function AdminPortfolio() {
  return (
    <div className='container'>
    <div className="row d-flex flex-column">
      <div className="col">
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <NavLink to="portfoliolist" className="nav-link">
              <i className="bi bi-list-ul"></i> PORTFOLIO LIST
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="addportfolio" className="nav-link">
              <i className="bi bi-plus-circle"></i> ADD
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  </div>  )
}

export default AdminPortfolio