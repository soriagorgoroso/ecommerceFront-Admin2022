import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table, Container, Col, Row, Card } from "react-bootstrap";
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
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title tag="h4">Ordenes</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
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
                              <a
                                className="btn btn-success"
                                rel="stylesheet"
                                href={`/ordenes/${order.id}`}
                              >
                                Editar
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

export default OrderCRUD;
