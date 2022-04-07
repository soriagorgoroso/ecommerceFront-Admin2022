import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [warning, setWarning] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [editedUser, setEditedUser] = React.useState({});

  React.useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${params.username}`,
        {
          headers: {
            Authorization: "Bearer " + userLogged.token,
          },
        }
      );
      setUser(response.data);
    };
    getUser();
  }, [params.username]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedUser) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/users/${user.username}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedUser,
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
    user && (
      <>
        <NavBarAdmin />
        <Container>
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className="w-75 ">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Editar Usuario: {user.username}</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3  form-label" htmlFor="firstname">
                      Nombre
                    </label>
                    <input
                      required
                      defaultValue={user.firstname}
                      className=" form-control"
                      id="firstname"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, firstname: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          firstname: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3  form-label" htmlFor="lastname">
                      Apellido
                    </label>
                    <input
                      required
                      defaultValue={user.lastname}
                      className=" form-control"
                      id="lastname"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, lastname: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          lastname: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3  form-label" htmlFor="address">
                      Domicilio
                    </label>
                    <input
                      required
                      defaultValue={user.address}
                      className=" form-control"
                      id="address"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, address: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          address: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3  form-label" htmlFor="telephone">
                      Teléfono
                    </label>
                    <input
                      required
                      defaultValue={user.telephone}
                      className=" form-control"
                      id="telephone"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, telephone: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          telephone: ev.target.value,
                        });
                      }}
                    />
                    <label className="mt-3  form-label" htmlFor="isAdmin">
                      Es administrador (true o false)
                    </label>
                    <input
                      required
                      defaultValue={user.isAdmin}
                      className=" form-control"
                      id="isAdmin"
                      type="text"
                      onChange={(ev) => {
                        setUser({ ...user, isAdmin: ev.target.value });
                        setEditedUser({
                          ...editedUser,
                          isAdmin: ev.target.value,
                        });
                      }}
                    />
                    {/*
                <label className="mt-3  form-label" htmlFor="isAdmin">
                  Tipo de usuario
                </label>
                <select
                  id="isAdmin"
                  className="form-select w-25"
                  aria-label="Default select example"
                  onChange={(ev) => {
                    console.log(ev.target.value);
                    ev.target.value === "Administrador"
                      ? setUser({ ...user, isAdmin: true })
                      : setUser({ ...user, isAdmin: false });
                  }}
                >
                  {user.isAdmin ? (
                    <>
                      <option selected value={true}>
                        Administrador
                      </option>
                      <option>Cliente</option>
                    </>
                  ) : (
                    <>
                      <option>Administrador</option>
                      <option selected value={false}>
                        Cliente
                      </option>
                    </>
                  )}
                </select>
                 */}
                    {warning && <p className="text-danger">{warning}</p>}
                    <button className="btn btn-success mt-3" type="submit">
                      Guardar cambios
                    </button>
                  </form>
                </Card.Body>
                <a className="mt-3 btn btn-danger" href="/usuarios">
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

export default EditUser;
