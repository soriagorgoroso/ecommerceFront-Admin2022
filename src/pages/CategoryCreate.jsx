import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function CategoryCreate() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [formFields, setFormFields] = React.useState({
    name: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in formFields) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/categories`,
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
    if (response.statusText === "OK") {
      navigate("/categorias");
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
            <h1>Crear nueva categoria</h1>
            <form onSubmit={handleSubmit} className="mb-5">
              <label className="mt-3 w-75 form-label" htmlFor="name">
                Nombre
              </label>
              <input
                onChange={(ev) => {
                  setFormFields({ ...formFields, name: ev.target.value });
                }}
                value={formFields.name}
                className="w-25 form-control"
                id="name"
                type="text"
              />
              {warning && <p className="text-danger">{warning}</p>}
              <button className="btn btn-success mt-3" type="submit">
                Guardar cambios
              </button>
            </form>
            <a className="mt-3 btn btn-danger" href="/categorias">
              Ir atrás
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryCreate;
