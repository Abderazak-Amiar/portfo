import React from "react"
import { Outlet, NavLink } from "react-router-dom"

function Admin() {
  return (

   
      <div className="row d-flex h-100">
        <div className="col-2  d-flex flex-column bg-body-tertiary">
          <div className="text-center my-3">
            <NavLink
              to=""
              className="text-decoration-none bg-logo rounded-circle p-2"
            >
              <strong>A-A</strong>
            </NavLink>
          </div>
          <hr />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="dashboard" className="nav-link">
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink to="skills/skillsList" className="nav-link link-body-emphasis">
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio/portfoliolist" className="nav-link link-body-emphasis">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="message" className="nav-link link-body-emphasis">
                MESSAGE
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown mx-2 p-2">
            <a
              href="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/images/Abderazak.jpg"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Abderazak</strong>
            </a>
            <ul className="dropdown-menu text-small shadow p-2">
              <li>
                <NavLink to="Profile" className="nav-link link-body-emphasis">
                Profile
              </NavLink>
              </li>
              <li>
                <NavLink to="Settings" className="nav-link link-body-emphasis">
                Settings
              </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  
                </a>
                <NavLink to="/" className="nav-link link-body-emphasis">
                Sign out
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* ADMIN CONTAINER */}
        <div className="col-10  container-fluid">
           
              <Outlet />
        </div>
      </div>
    
  )
}

export default Admin
