import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";

function Statistics() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row>
          <Col className="marginCol">
            <Card>
              <Card.Header>
                <h1>Estadísticas</h1>
              </Card.Header>
              <Card.Body>
                <Row className="mt-3">
                  <Col md={3} xs={12}>
                    <div className="card text-white bg-primary text-center">
                      <div className="card-header">Usuarios registrados</div>
                      <div className="card-body">
                        <h5 className="card-title">2473</h5>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} xs={12}>
                    <div className="card text-white bg-success text-center">
                      <div className="card-header"># Ventas último mes</div>
                      <div className="card-body">
                        <h5 className="card-title">715</h5>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} xs={12}>
                    <div className="card text-white bg-warning text-center">
                      <div className="card-header">Más vendido</div>
                      <div className="card-body">
                        <h5 className="card-title">FLOR DE LIO</h5>
                      </div>
                    </div>
                  </Col>
                  <Col md={3} xs={12}>
                    <div className="card text-white bg-info text-center">
                      <div className="card-header">Más vendido del mes</div>
                      <div className="card-body">
                        <h5 className="card-title">BOLONQUI</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="my-5">
                  <Col>
                    <BarChart />
                  </Col>
                  <Col>
                    <DoughnutChart />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Statistics;
