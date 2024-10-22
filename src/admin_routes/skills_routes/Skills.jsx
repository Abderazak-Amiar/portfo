import React from "react"
import { NavLink, Outlet } from "react-router-dom"
function Skills() {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col">
          <ul className="nav nav-tabs">
          <li className="nav-item">
              <NavLink to="skillsList" className="nav-link">
                <i className="bi bi-list-ul"></i> SKILLS LIST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="addskills" className="nav-link">
                <i className="bi bi-plus-circle"></i> ADD
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Skills
