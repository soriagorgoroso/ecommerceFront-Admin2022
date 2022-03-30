import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

function ArticleCRUD() {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("http://localhost:8000/articles");
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    articles && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <h1>Articulos</h1>
            <button className="btn btn-primary">Agregar articulo</button>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>tamaño en cc</th>
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
                    <a className="btn btn-danger" rel="stylesheet" href="/">
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

export default ArticleCRUD;
