import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row, Card } from "react-bootstrap";

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
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title
                      className="d-flex justify-content-between align-items-center"
                      tag="h4"
                    >
                      Categorias{" "}
                      <a href="categorias/nuevo" className="btn btn-primary">
                        Agregar categoria
                      </a>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      className="tablesorter"
                      responsive="md"
                    >
                      <thead className="text-primary">
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">id</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <tr scope="row" key={category._id}>
                            <td>{category.name}</td>
                            <td>{category._id}</td>
                            <td>
                              <a
                                className="btn btn-outline-success"
                                rel="stylesheet"
                                href={`/categorias/${category.name}`}
                              >
                                <i className="fa-solid fa-pen"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  );
}

export default CategoryCRUD;
