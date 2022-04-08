import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
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
    if (response.status === 200) {
      navigate("/categorias");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <Container>
        <Row xs={1} md={1} lg={7} className="d-flex justify-content-center ">
          <Col className="w-50">
            {" "}
            <Card className="">
              <Card.Header>
                <Card.Title>
                  <h1>Crear nueva categoria</h1>
                </Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <form onSubmit={handleSubmit} className="mb-5">
                  <label className="mt-3  form-label" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    required
                    onChange={(ev) => {
                      setFormFields({ ...formFields, name: ev.target.value });
                    }}
                    value={formFields.name}
                    className=" form-control"
                    id="name"
                    type="text"
                  />
                  {warning && <p className="text-danger">{warning}</p>}
                  <button className="btn btn-success mt-3" type="submit">
                    Guardar cambios
                  </button>
                </form>
              </Card.Body>
              <a className="mt-3 btn btn-danger" href="/categorias">
                Ir atrás
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryCreate;
