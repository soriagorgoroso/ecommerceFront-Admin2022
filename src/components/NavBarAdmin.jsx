import React from "react";
import "./NavBarAdmin.css";
function NavBarAdmin() {
  return (
    <>
      <div className="dashboard">
        <ul className="dashboard__bar">
          <li id="logo" className="dashboard__bar__item">
            <a href="#logo" className="dashboard__bar__item--logo">
              <i className="fas fa-chess-knight"></i>
            </a>
          </li>
          <li id="view_site" className="dashboard__bar__item">
            <a href="#view_site" className="dashboard__bar__item--btn">
              <i className="fas fa-home"></i>Hack Bier
            </a>
            <div className="dashboard__submenu">
              <a href="">Ir al sitio</a>
            </div>
          </li>
          <li id="profile" className="dashboard__bar__item">
            <a href="#profile" className="dashboard__bar__item--btn">
              <i className="fas fa-portrait"></i>Bienvenido
            </a>
            <div className="dashboard__submenu">
              <a href="">Logout</a>
            </div>
          </li>
        </ul>

        <ui className="dashboard__menu">
          <li id="products" className="dashboard__menu__item">
            <a href="/articulos" className="dashboard__menu__item--btn">
              <i className="fas fa-drum"></i>Articulos
              <span className="right-arrow"></span>
            </a>
          </li>
          <li id="articles" className="dashboard__menu__item">
            <a href="/categorias" className="dashboard__menu__item--btn">
              <i className="fas fa-newspaper"></i>Categorias
              <span className="right-arrow"></span>
            </a>
          </li>
          <li id="pages" className="dashboard__menu__item">
            <a href="/ordenes" className="dashboard__menu__item--btn">
              <i className="fas fa-columns"></i>Ordenes
              <span className="right-arrow"></span>
            </a>
            <div className="dashboard__submenu">
              <a className="dashboard__submenu--btn" href="#pages">
                Todas las ordenes
              </a>
            </div>
          </li>
          <li id="users" className="dashboard__menu__item">
            <a href="/usuarios" className="dashboard__menu__item--btn">
              <i className="fas fa-user"></i>Usuarios
              <span className="right-arrow"></span>
            </a>
          </li>
          <li id="users" className="dashboard__menu__item">
            <a href="/estadisticas" className="dashboard__menu__item--btn">
              <i className="fas fa-user"></i>Estadisticas
              <span className="right-arrow"></span>
            </a>
          </li>
        </ui>
      </div>
    </>
  );
}

export default NavBarAdmin;
