import React from "react";
import "./NavBarAdmin.css";
function NavBarAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <div className="">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item">
              <a className="nav-link">
                <i className=""></i>Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-clone"></i>Components
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-calendar-alt"></i>Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-chart-bar"></i>Charts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-copy"></i>Documents
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBarAdmin;
