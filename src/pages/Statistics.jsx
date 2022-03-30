import React from "react";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function Statistics() {
  return (
    <>
      <NavBarAdmin />
      <Container>
        <h1>Estadisticas de ventas</h1>
        <img
          className="img-fluid"
          src="./estadisticas/graphic-1606688.png"
          alt="estadisticas"
        />
      </Container>
    </>
  );
}

export default Statistics;
