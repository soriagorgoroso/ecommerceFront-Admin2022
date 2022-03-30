import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditCaregory from "../components/ButtonEditCategory";

function EditCategory() {
  const params = useParams();
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/${params.name}`
      );
      setCategory(response.data);
    };
    getCategory();
  }, [params.name]);

  return (
    category && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Editar Categoria: {category.name}</h1>
          <form action="" method="post" className="mb-5">
            <label className="mt-3 w-75 form-label" htmlFor="name">
              Nombre
            </label>
            <input
              defaultValue={category.name}
              className="w-75 form-control"
              id="name"
              type="text"
            />
          </form>
          <ButtonEditCaregory />
          <br />
          <a className="my-3 btn btn-danger" href="/categorias">
            Ir atrás
          </a>
        </Container>
      </>
    )
  );
}

export default EditCategory;
