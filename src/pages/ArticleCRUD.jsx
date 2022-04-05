import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row, Card } from "react-bootstrap";
function ArticleCRUD() {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles`
      );
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    articles && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title tag="h4">Articulos</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Categoria</th>
                          <th>Tamaño en CC</th>
                          <th>Stock</th>
                        </tr>
                      </thead>
                      <tbody>
                        {articles.map((article) => (
                          <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.name}</td>
                            <td>{article.category}</td>
                            <td>{article.sizecc}</td>
                            <td>{article.stock}</td>
                            <td>
                              <a
                                className="btn btn-success"
                                rel="stylesheet"
                                href={`/articulos/${article.id}`}
                              >
                                Editar
                              </a>
                            </td>
                            <td>
                              <a
                                className="btn btn-danger"
                                rel="stylesheet"
                                href="/"
                              >
                                Eliminar
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

export default ArticleCRUD;
