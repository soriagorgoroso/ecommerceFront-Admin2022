import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditUser from "../components/ButtonEditUser";
import { useSelector } from "react-redux";

function EditUser() {
  const params = useParams();
  const [user, setUser] = React.useState(null);
  const userLogged = useSelector((state) => state.user);
  //
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [address, setAddress] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

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

  return (
    user && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Editar Usuario: {user.username}</h1>
          <form action="" method="post" className="mb-5">
            <label className="mt-3 w-75 form-label" htmlFor="firstname">
              Nombre
            </label>
            <input
              defaultValue={user.firstname}
              className="w-75 form-control"
              id="firstname"
              type="text"
            />
            <label className="mt-3 w-75 form-label" htmlFor="lastname">
              Apellido
            </label>
            <input
              defaultValue={user.lastname}
              className="w-75 form-control"
              id="lastname"
              type="text"
            />
            <label className="mt-3 w-75 form-label" htmlFor="address">
              Domicilio
            </label>
            <input
              defaultValue={user.address}
              className="w-75 form-control"
              id="address"
              type="text"
            />
            <label className="mt-3 w-75 form-label" htmlFor="telephone">
              Teléfono
            </label>
            <input
              defaultValue={user.telephone}
              className="w-75 form-control"
              id="telephone"
              type="text"
            />
            <label className="mt-3 w-75 form-label" htmlFor="isAdmin">
              Es administrador
            </label>
            <input
              defaultValue={user.isAdmin}
              className="w-75 form-control"
              id="isAdmin"
              type="text"
            />
          </form>
          <ButtonEditUser />
          <br />
          <a className="my-3 btn btn-danger" href="/usuarios">
            Ir atrás
          </a>
        </Container>
      </>
    )
  );
}

export default EditUser;
