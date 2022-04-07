import React from "react";
import axios from "axios";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditArticle from "../components/ButtonEditArticle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditArticle() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const params = useParams();
  const [article, setArticle] = React.useState(null);
  const [editedArticle, setEditedArticle] = React.useState({});

  React.useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles/${params.id}`
      );
      setArticle(response.data);
    };
    getArticle();
  }, [params.id]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedArticle) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/articles/${article.id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedArticle,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/articulos");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    article && (
      <>
        <NavBarAdmin />
        <Container>
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className=" w-75">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Editar Articulo: {article.name}</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3 form-label" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      required
                      defaultValue={article.name}
                      className=" form-control"
                      id="name"
                      type="text"
                      onChange={(ev) => {
                        setArticle({ ...article, name: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          name: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="description">
                      Descripción
                    </label>
                    <input
                      required
                      defaultValue={article.description}
                      className=" form-control"
                      id="description"
                      onChange={(ev) => {
                        setArticle({
                          ...article,
                          description: ev.target.value,
                        });
                        setEditedArticle({
                          ...editedArticle,
                          description: ev.target.value,
                        });
                      }}
                    />

                    {/* <label className="mt-3 form-label" htmlFor="image">
              Imagen
            </label>
            <input className=" form-control" id="image" type="file" /> */}
                    <label className="mt-3 form-label" htmlFor="image">
                      Imagen
                    </label>
                    <input
                      required
                      placeholder="placeholder.jpg"
                      defaultValue={article.image}
                      className=" form-control"
                      id="image"
                      type="text"
                      onChange={(ev) => {
                        setArticle({ ...article, image: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          image: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="price">
                      Precio
                    </label>
                    <input
                      required
                      defaultValue={article.price}
                      className=" form-control"
                      id="price"
                      type="number"
                      onChange={(ev) => {
                        setArticle({ ...article, price: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          price: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="sicezz">
                      Volumen en cc
                    </label>
                    <input
                      required
                      defaultValue={article.sizecc}
                      className=" form-control"
                      id="sicezz"
                      type="number"
                      onChange={(ev) => {
                        setArticle({ ...article, sicezz: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          sicezz: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="stock">
                      Stock
                    </label>
                    <input
                      required
                      defaultValue={article.stock}
                      className=" form-control"
                      id="stock"
                      type="number"
                      onChange={(ev) => {
                        setArticle({ ...article, stock: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          stock: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="category">
                      Categoría
                    </label>
                    <input
                      required
                      defaultValue={article.category}
                      className=" form-control"
                      id="category"
                      type="text"
                      onChange={(ev) => {
                        setArticle({ ...article, category: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          category: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="topSeller">
                      Mas vendidos?
                    </label>
                    <input
                      required
                      defaultValue={article.topSeller}
                      className=" form-control"
                      id="topSeller"
                      type="text"
                      onChange={(ev) => {
                        setArticle({ ...article, topSeller: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          topSeller: ev.target.value,
                        });
                      }}
                    />

                    <label className="mt-3 form-label" htmlFor="ibus">
                      Ibus
                    </label>
                    <input
                      required
                      defaultValue={article.ibus}
                      className=" form-control"
                      id="ibus"
                      type="text"
                      onChange={(ev) => {
                        setArticle({ ...article, ibus: ev.target.value });
                        setEditedArticle({
                          ...editedArticle,
                          ibus: ev.target.value,
                        });
                      }}
                    />
                    {warning && <p className="text-danger">{warning}</p>}
                    <button className="btn btn-success mt-3" type="submit">
                      Guardar cambios
                    </button>
                  </form>
                </Card.Body>
                <a className="mt-3 btn btn-danger" href="/articulos">
                  Ir atrás
                </a>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default EditArticle;
