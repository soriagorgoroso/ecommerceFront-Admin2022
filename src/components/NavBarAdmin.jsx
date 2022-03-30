import React from "react";
import "./NavBarAdmin.css";
function NavBarAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="/">
          Hack Beer
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
              <a className="nav-link" href="/usuarios">
                <i className=""></i>Usuarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/articulos">
                <i className="far fa-clone"></i>Articulos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias">
                <i className="far fa-calendar-alt"></i>Categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ordenes">
                <i className="far fa-chart-bar"></i>Ordenes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/estadisticas">
                <i className="far fa-copy"></i>Estadisticas
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBarAdmin;
