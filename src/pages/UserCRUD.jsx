import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
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
          <div className="d-flex align-items-center justify-content-between">
            <h1>Usuarios</h1>
            <button className="btn btn-primary">Agregar usuario ?</button>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th>Categoria</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                  <td>{user.isAdmin ? "Administrador" : "Cliente"}</td>
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
                    <a className="btn btn-danger" rel="stylesheet" href="">
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    )
  );
}

export default UserCRUD;
