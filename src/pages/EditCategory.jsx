import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditCategory() {
  const navigate = useNavigate();
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const [editedCategory, setEditedCategory] = React.useState({});

  React.useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/${params.name}`
      );
      setCategory(response.data);
    };
    getCategory();
  }, [params.name]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedCategory) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/categories/${category.id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedCategory,
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
    category && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Editar Categoria: {category.name}</h1>
          <form onSubmit={handleSubmit} className="mb-5">
            <label className="mt-3 w-75 form-label" htmlFor="name">
              Nombre
            </label>
            <input
              value={category.name}
              className="w-25 form-control"
              id="name"
              type="text"
              onChange={(ev) => {
                setCategory({ ...category, name: ev.target.value });
                setEditedCategory({ ...editedCategory, name: ev.target.value });
              }}
            />
            {warning && <p className="text-danger">{warning}</p>}
            <button className="btn btn-success mt-3" type="submit">
              Guardar cambios
            </button>
          </form>

          <a className="my-3 btn btn-danger" href="/categorias">
            Ir atrás
          </a>
        </Container>
      </>
    )
  );
}

export default EditCategory;
