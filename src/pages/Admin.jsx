import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function Admin() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row>
          <Col className="text-white">
            {" "}
            <h1>Pagina del administrador</h1>
            <p>Bienvenido a la pagina del administrador de Hack Bier</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
