import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

function OrderCRUD() {
  const [orders, setOrders] = React.useState(null);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("http://localhost:8000/orders");
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
                <tr>
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
