import React from "react";
import { NavLink } from "react-router-dom";

function Header(){

    return(
<nav className="header-menu navbar navbar-light navbar-expand-lg d-flex  align-items-center justify-content-between justify-content-md-between py-3 mb-4 border-bottom px-5 container fixed-top rounded-bottom headerStyle">

    <div className="col-md-1 mb-2 mb-md-0 navbar-brand text-start" >
    <NavLink to="/" className="text-decoration-none bg-logo rounded-circle p-2">
          <strong>A-A</strong>
        </NavLink>
    </div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
             <span className="navbar-toggler-icon"></span>
            </button>
    <div className="col-md-10 navbar-collapse collapse" id="navbar">


          <ul className="nav col-lg-11 col-md- mb-2 col-sm-  mb-md-0 justify-content-center ">
            <li><NavLink to="/expertise" className="nav-link px-2 ulHeaderstyle">My Expertise</NavLink></li>
            <li><NavLink to="/portfolio" className="nav-link px-2 ulHeaderstyle">Portfolio</NavLink></li>
            <li><NavLink to="/about" className="nav-link px-2 ulHeaderstyle">About Me</NavLink></li>
            <li><NavLink to="/admin" className="nav-link px-2 ulHeaderstyle">Admin</NavLink></li>
            <li><NavLink to="/login" className="nav-link px-2 ulHeaderstyle">Login</NavLink></li>
          </ul>

          <div className="col-lg-1 col-md- col-sm- text-center">
            <button className="btn btn-outline-primary btnContactHeader"><NavLink to="/contact" className="nav-link px-2">Contact</NavLink></button>
            
          </div>
    </div>
</nav>
        )
}
export default Header;
