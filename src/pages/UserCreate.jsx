import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import ButtonCreateUser from "../components/ButtonCreateUser";

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
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users`,
      {
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
      },
      formFields,
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    console.log(response);
    if (response.statusText === "OK") {
      navigate("/usuarios");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <Container>
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
          />

          <label className="mt-3 w-75 form-label" htmlFor="telephone">
            Teléono
          </label>
          <input
            onChange={(ev) =>
              setFormFields({ ...formFields, telephone: ev.target.value })
            }
            value={formFields.telephone}
            className="w-75 form-control"
            id="telephone"
            type="number"
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
          />
        </form>
        {warning && <p className="text-danger">{warning}</p>}
        <ButtonCreateUser />
        <br />
        <a className="my-3 btn btn-danger" href="/usuarios">
          Ir atrás
        </a>
      </Container>
    </>
  );
}

export default UserCreate;
