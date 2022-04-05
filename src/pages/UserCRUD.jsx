import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function UserCRUD() {
  const [users, setUsers] = React.useState(null);
  const user = useSelector((state) => state.user);
  //console.log(user);

  React.useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    users && (
      <>
        <NavBarAdmin />
        <Container>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title
                      tag="h4"
                      className="d-flex justify-content-between"
                    >
                      Usuarios{" "}
                      <a href="/usuarios/nuevo" className="btn btn-primary">
                        Agregar usuario
                      </a>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      className="tablesorter"
                      responsive
                    >
                      <thead className="text-primary">
                        <tr>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Usuario</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">id</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user._id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.username}</td>
                            <td>
                              {user.isAdmin ? "Administrador" : "Cliente"}
                            </td>
                            <td>{user._id}</td>
                            <td>
                              <a
                                className="btn btn-success"
                                rel="stylesheet"
                                href={`/usuarios/${user.username}`}
                              >
                                Editar
                              </a>
                            </td>
                            <td>
                              <a
                                className="btn btn-danger"
                                rel="stylesheet"
                                href=""
                              >
                                Eliminar
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  );
}

export default UserCRUD;
