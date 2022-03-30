import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import ButtonEditOrder from "../components/ButtonEditOrder";
import { useSelector } from "react-redux";

function EditOrder() {
  const params = useParams();
  const [order, setOrder] = React.useState(null);
  const userLogged = useSelector((state) => state.user);

  React.useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/orders/${params.id}`,
        {
          headers: {
            Authorization: "Bearer " + userLogged.token,
          },
        }
      );
      setOrder(response.data);
    };
    getOrder();
  }, [params.id]);

  return (
    order && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Editar Orden número: {order.id}</h1>
          <form action="" method="post" className="mb-5">
            <label className="mt-3 w-75 form-label" htmlFor="status">
              Estado
            </label>
            <input
              defaultValue={order.status}
              className="w-75 form-control"
              id="status"
              type="text"
            />
          </form>
          <ButtonEditOrder />
          <br />
          <a className="my-3 btn btn-danger" href="/ordenes">
            Ir atrás
          </a>
        </Container>
      </>
    )
  );
}

export default EditOrder;
