import React, { useState } from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

function CategoryCRUD() {
  const [categories, setcategories] = React.useState(null);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:8000/categories");
      setcategories(response.data);
    };
    getCategories();
  }, []);

  return (
    categories && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <h1>Categorias</h1>
            <button className="btn btn-primary">Agregar categoria</button>
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
                <tr>
                  <td>{category._id}</td>
                  <td>{category.name}</td>

                  <td>
                    <a className="btn btn-success" rel="stylesheet" href="">
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
        </Container>
      </>
    )
  );
}

export default CategoryCRUD;
