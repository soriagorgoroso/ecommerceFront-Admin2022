import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function OrderCRUD() {
  const [orders, setOrders] = React.useState(null);
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/orders`,
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      );
      setOrders(response.data);
    };
    getOrders();
  }, []);

  return (
    orders && (
      <>
        <NavBarAdmin />
        <Container>
          <h1>Pedidos</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>Fecha de compra</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>

                  <td>
                    <a className="btn btn-success" rel="stylesheet" href="">
                      Editar
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

export default OrderCRUD;
