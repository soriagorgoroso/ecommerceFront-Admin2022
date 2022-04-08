import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function ArticleCreate() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [formFields, setFormFields] = React.useState({
    name: "",
    description: "",
    price: "",
    sizecc: "",
    stock: "",
    category: "",
    ibus: "",
    image: "",
  });
  console.log(formFields);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in formFields) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/articles`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: formFields,
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
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className="w-75 ">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Crear nuevo articulo</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  {" "}
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3 form-label" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({ ...formFields, name: ev.target.value });
                      }}
                      value={formFields.name}
                      className=" form-control w-100 "
                      id="name"
                      type="text"
                      required
                    />

                    <label className="mt-3 form-label" htmlFor="description">
                      Descripción
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({
                          ...formFields,
                          description: ev.target.value,
                        });
                      }}
                      value={formFields.description}
                      className=" form-control"
                      id="description"
                      type="text"
                      required
                    />
                    {/* <textarea
            onChange={(ev) =>
              setFormFields({ ...formFields, description: ev.target.value })
            }
            value={formFields.description}
            className=" form-control"
            id="description"
            rows="4"
          /> */}

                    {/* <label className="mt-3 form-label" htmlFor="image">
            Imagen
          </label>
          <input className=" form-control" id="image" type="file" /> */}
                    <label className="mt-3 form-label" htmlFor="image">
                      Imagen "PLACEHOLDER.jpg"
                    </label>
                    <input
                      placeholder="PLACEHOLDER.jpg"
                      onChange={(ev) => {
                        setFormFields({
                          ...formFields,
                          image: ev.target.value,
                        });
                      }}
                      value={formFields.image}
                      //defaultValue="PLACEHOLDER.jpg"
                      // readOnly
                      className=" form-control"
                      id="image"
                      type="text"
                      required
                    />

                    <label className="mt-3 form-label" htmlFor="price">
                      Precio
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({
                          ...formFields,
                          price: ev.target.value,
                        });
                      }}
                      value={formFields.price}
                      className=" form-control"
                      id="price"
                      type="number"
                      required
                    />

                    <label className="mt-3 form-label" htmlFor="sicezz">
                      Volumen en cc
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({
                          ...formFields,
                          sizecc: ev.target.value,
                        });
                      }}
                      value={formFields.sizecc}
                      className=" form-control"
                      id="sizecc"
                      type="number"
                      required
                    />

                    <label className="mt-3 form-label" htmlFor="stock">
                      Stock
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({
                          ...formFields,
                          stock: ev.target.value,
                        });
                      }}
                      value={formFields.stock}
                      className=" form-control"
                      id="stock"
                      type="number"
                      required
                    />

                    <label className="mt-3 form-label" htmlFor="category">
                      Categoría
                    </label>
                    {/* <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, category: ev.target.value });
                }}
                value={formFields.category}
                className=" form-control"
                id="category"
                type="text"
                required
              /> */}
                    <select
                      className="w-25 ms-3 fs-4 form-control border "
                      aria-label="filter"
                      id="category"
                      type="text"
                      onChange={(ev) => {
                        {
                          setFormFields({
                            ...formFields,
                            category: ev.target.value,
                          });
                        }
                      }}
                    >
                      {categories.map((category) => (
                        <option
                          className="form-control"
                          value={category.name}
                          key={category.id}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>

                    <label className="mt-3 form-label" htmlFor="ibus">
                      Ibus
                    </label>
                    <input
                      onChange={(ev) => {
                        setFormFields({ ...formFields, ibus: ev.target.value });
                      }}
                      value={formFields.ibus}
                      className=" form-control"
                      id="ibus"
                      type="text"
                      required
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

export default ArticleCreate;
