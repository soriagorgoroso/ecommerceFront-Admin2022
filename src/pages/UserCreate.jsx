import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";

function UserCreate() {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [formFields, setFormFields] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    address: "",
    telephone: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in formFields) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/users`,
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
      navigate("/usuarios");
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
            <h1>Crear nuevo usuario</h1>
            <form onSubmit={handleSubmit} className="mb-5">
              <label className="mt-3 w-75 form-label" htmlFor="firstname">
                Nombre
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, firstname: ev.target.value })
                }
                value={formFields.firstname}
                className="w-75 form-control"
                id="firstname"
                type="text"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="lastname">
                Apellido
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, lastname: ev.target.value })
                }
                value={formFields.lastname}
                className="w-75 form-control"
                id="lastname"
                type="text"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="address">
                Domicilio
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, address: ev.target.value })
                }
                value={formFields.address}
                className="w-75 form-control"
                id="address"
                type="text"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="telephone">
                Teléfono
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, telephone: ev.target.value })
                }
                value={formFields.telephone}
                className="w-75 form-control"
                id="telephone"
                type="tel"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="username">
                Nombre de usuario
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, username: ev.target.value })
                }
                value={formFields.username}
                className="w-75 form-control"
                id="username"
                type="text"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="email">
                E-mail
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, email: ev.target.value })
                }
                value={formFields.email}
                className="w-75 form-control"
                id="email"
                type="email"
                required
              />

              <label className="mt-3 w-75 form-label" htmlFor="password">
                Password
              </label>
              <input
                onChange={(ev) =>
                  setFormFields({ ...formFields, password: ev.target.value })
                }
                value={formFields.password}
                className="w-75 form-control"
                id="password"
                type="password"
                required
              />
              {warning && <p className="text-danger">{warning}</p>}
              <button className="btn btn-success mt-3" type="submit">
                Guardar cambios
              </button>
            </form>
            <a className="mt-3 btn btn-danger" href="/usuarios">
              Ir atrás
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserCreate;
