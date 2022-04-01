import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function Statistics() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row>
          <Col className="marginCol">
            {" "}
            <h1>Estadisticas de ventas</h1>
            <img
              className="img-fluid"
              src="/estadisticas/graphic-1606688.png"
              alt="estadisticas"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Statistics;
