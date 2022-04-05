import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
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
    console.log(response);
    if (response.statusText === "OK") {
      navigate("/articulos");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row>
          <Col className="text-white">
            {" "}
            <h1>Crear nuevo articulo</h1>
            <form onSubmit={handleSubmit} className="mb-5">
              <label className="mt-3 w-75 form-label" htmlFor="name">
                Nombre
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, name: ev.target.value });
                }}
                value={formFields.name}
                className="w-75 form-control"
                id="name"
                type="text"
              />

              <label className="mt-3 w-75 form-label" htmlFor="description">
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
                className="w-75 form-control"
                id="description"
                type="text"
              />
              {/* <textarea
            onChange={(ev) =>
              setFormFields({ ...formFields, description: ev.target.value })
            }
            value={formFields.description}
            className="w-75 form-control"
            id="description"
            rows="4"
          /> */}

              {/* <label className="mt-3 w-75 form-label" htmlFor="image">
            Imagen
          </label>
          <input className="w-75 form-control" id="image" type="file" /> */}
              <label className="mt-3 w-75 form-label" htmlFor="image">
                Imagen "placeholder.jpg"
              </label>
              <input
                placeholder="placeholder.jpg"
                onChange={(ev) => {
                  setFormFields({ ...formFields, image: ev.target.value });
                }}
                value={formFields.image}
                //defaultValue="placeholder.jpg"
                // readOnly
                className="w-75 form-control"
                id="image"
                type="text"
              />

              <label className="mt-3 w-75 form-label" htmlFor="price">
                Precio
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, price: ev.target.value });
                }}
                value={formFields.price}
                className="w-75 form-control"
                id="price"
                type="number"
              />

              <label className="mt-3 w-75 form-label" htmlFor="sicezz">
                Volumen en cc
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, sizecc: ev.target.value });
                }}
                value={formFields.sizecc}
                className="w-75 form-control"
                id="sizecc"
                type="number"
              />

              <label className="mt-3 w-75 form-label" htmlFor="stock">
                Stock
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, stock: ev.target.value });
                }}
                value={formFields.stock}
                className="w-75 form-control"
                id="stock"
                type="number"
              />

              <label className="mt-3 w-75 form-label" htmlFor="category">
                Categoría
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, category: ev.target.value });
                }}
                value={formFields.category}
                className="w-75 form-control"
                id="category"
                type="text"
              />

              <label className="mt-3 w-75 form-label" htmlFor="ibus">
                Ibus
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, ibus: ev.target.value });
                }}
                value={formFields.ibus}
                className="w-75 form-control"
                id="ibus"
                type="text"
              />
              {warning && <p className="text-danger">{warning}</p>}
              <button className="btn btn-success mt-3" type="submit">
                Guardar cambios
              </button>
            </form>
            <a className="mt-3 btn btn-danger" href="/articulos">
              Ir atrás
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ArticleCreate;
