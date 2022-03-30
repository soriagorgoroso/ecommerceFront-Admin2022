import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import ButtonCreateCategory from "../components/ButtonCreateCategory";

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
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/categories`,
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
      navigate("/articulos");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <Container>
        <h1>Crear nueva categoria</h1>
        <form onSubmit={handleSubmit} className="mb-5">
          <label className="mt-3 w-75 form-label" htmlFor="name">
            Nombre
          </label>
          <input
            onChange={(ev) =>
              setFormFields({ ...formFields, name: ev.target.value })
            }
            value={formFields.name}
            className="w-75 form-control"
            id="name"
            type="text"
          />
        </form>

        {warning && <p className="text-danger">{warning}</p>}

        <ButtonCreateCategory />
        <br />
        <a className="my-3 btn btn-danger" href="/articulos">
          Ir atrás
        </a>
      </Container>
    </>
  );
}

export default CategoryCreate;
