import React from "react";
import axios from "axios";
import { Container, Col, Row, Card } from "react-bootstrap";
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
    if (response.status === 200) {
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
                  <h1>Editar Categoria: {category.name}</h1>
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3 form-label" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      required
                      value={category.name}
                      className=" form-control"
                      id="name"
                      type="text"
                      onChange={(ev) => {
                        setCategory({ ...category, name: ev.target.value });
                        setEditedCategory({
                          ...editedCategory,
                          name: ev.target.value,
                        });
                      }}
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
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default EditCategory;
