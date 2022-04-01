import React, { useState } from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row } from "react-bootstrap";

function CategoryCRUD() {
  const [categories, setcategories] = React.useState(null);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories`
      );
      setcategories(response.data);
    };
    getCategories();
  }, []);

  return (
    categories && (
      <>
        <NavBarAdmin />
        <Container>
          <Row>
            <Col className="marginCol">
              {" "}
              <div className="d-flex align-items-center justify-content-between">
                <h1>Categorias</h1>
                <a href="categorias/nuevo" className="btn btn-primary">
                  Agregar categoria
                </a>
              </div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category._id}>
                      <td>{category._id}</td>
                      <td>{category.name}</td>

                      <td>
                        <a
                          className="btn btn-success"
                          rel="stylesheet"
                          href={`/categorias/${category.name}`}
                        >
                          Editar
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-danger" rel="stylesheet" href="">
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default CategoryCRUD;
