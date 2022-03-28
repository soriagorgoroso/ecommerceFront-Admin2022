import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditArticle from "../components/ButtonEditArticle";

function EditArticle() {
  const params = useParams();
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `http://localhost:8000/articles/${params.id}`
      );
      setArticle(response.data);
    };
    getArticle();
  }, [params.id]);

  return (
    article && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Editar Articulo: {article.name}</h1>
          <form action="" method="post" className="mb-5">
            <label className="mt-3 w-75 form-label" htmlFor="name">
              Nombre
            </label>
            <input
              value={article.name}
              className="w-75 form-control"
              id="name"
              type="text"
            />

            <label className="mt-3 w-75 form-label" htmlFor="description">
              Descripción
            </label>
            <textarea className="w-75 form-control" id="description" rows="4">
              {article.description}
            </textarea>

            <label className="mt-3 w-75 form-label" htmlFor="image">
              Imagen
            </label>
            <input className="w-75 form-control" id="image" type="file" />

            <label className="mt-3 w-75 form-label" htmlFor="price">
              Precio
            </label>
            <input
              value={article.price}
              className="w-75 form-control"
              id="price"
              type="number"
            />

            <label className="mt-3 w-75 form-label" htmlFor="sicezz">
              Volumen en cc
            </label>
            <input
              value={article.sizecc}
              className="w-75 form-control"
              id="sicezz"
              type="number"
            />

            <label className="mt-3 w-75 form-label" htmlFor="stock">
              Stock
            </label>
            <input
              value={article.stock}
              className="w-75 form-control"
              id="stock"
              type="number"
            />

            <label className="mt-3 w-75 form-label" htmlFor="category">
              Categoría
            </label>
            <input
              value={article.category}
              className="w-75 form-control"
              id="category"
              type="text"
            />

            <label className="mt-3 w-75 form-label" htmlFor="topSeller">
              Mas vendidos?
            </label>
            <input
              value={article.topSeller}
              className="w-75 form-control"
              id="category"
              type="text"
            />

            <label className="mt-3 w-75 form-label" htmlFor="ibus">
              Ibus
            </label>
            <input
              value={article.ibus}
              className="w-75 form-control"
              id="ibus"
              type="text"
            />
          </form>
          <ButtonEditArticle />
          <br />
          <a className="my-3 btn btn-danger" href="/articulos">
            Ir atrás
          </a>
        </Container>
      </>
    )
  );
}

export default EditArticle;
