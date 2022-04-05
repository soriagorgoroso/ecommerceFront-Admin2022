import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function Statistics() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row>
          <Col className="marginCol">
            <Card>
              <Card.Header>
                {" "}
                <h1>Estadisticas de ventas</h1>
              </Card.Header>
              <Card.Body>
                <img
                  className="img-fluid"
                  src="/estadisticas/graphic-1606688.png"
                  alt="estadisticas"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Statistics;
