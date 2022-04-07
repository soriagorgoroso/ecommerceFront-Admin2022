import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./NavBarAdmin.css";
import {
  Table,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import actions from "../redux/userActions";
import axios from "axios";
function NavBarAdmin() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (ev) => {
    ev.preventDefault();
    try {
      console.log(user);
      await axios({
        url: process.env.REACT_APP_API_URL + `/users/logout`,
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      dispatch(actions.logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar bg="dark" className="mb-5" ticky="top" expand={false}>
        <Container fluid>
          <Navbar.Brand className="text-white" href="/admin">
            Panel de Administrador
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header className="" closeButton></Offcanvas.Header>
            <Form className="d-flex pt-5"></Form>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <ul className="dashboard__menu">
                  <li id="products" className="dashboard__menu__item">
                    <a href="/articulos" className="dashboard__menu__item--btn">
                      Articulos
                      <span className="right-arrow"></span>
                    </a>
                  </li>
                  <li id="articles" className="dashboard__menu__item">
                    <a
                      href="/categorias"
                      className="dashboard__menu__item--btn"
                    >
                      Categorias
                      <span className="right-arrow"></span>
                    </a>
                  </li>
                  <li id="pages" className="dashboard__menu__item">
                    <a href="/ordenes" className="dashboard__menu__item--btn">
                      Ordenes
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
                      Usuarios
                      <span className="right-arrow"></span>
                    </a>
                  </li>
                  <li id="users" className="dashboard__menu__item">
                    <a
                      href="/estadisticas"
                      className="dashboard__menu__item--btn"
                    >
                      Estadisticas
                      <span className="right-arrow"></span>
                    </a>
                  </li>
                </ul>
              </Nav>
            </Offcanvas.Body>
            <Nav.Link
              onClick={handleLogout}
              className="dashboard__menu__item--btn-exit text-center"
            >
              LogOut
            </Nav.Link>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarAdmin;
