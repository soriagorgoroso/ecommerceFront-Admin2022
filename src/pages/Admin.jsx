import React from "react";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function Admin() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <h1>Pagina del administrador</h1>
        <p>Bienvenido a la pagina del administrador de Hack Beer</p>
      </Container>
    </>
  );
}

export default Admin;
