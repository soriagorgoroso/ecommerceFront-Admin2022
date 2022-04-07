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
                    <Card.Title
                      tag="h4"
                      className="d-flex justify-content-between align-items-center"
                    >
                      Ordenes
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Table
                      striped
                      bordered
                      hover
                      className="tablesorter"
                      responsive="md"
                    >
                      <thead className="text-primary">
                        <tr>
                          <th scope="col">Fecha de compra</th>
                          <th scope="col">Estado</th>
                          <th scope="col">id</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order._id}>
                            <td>{order.createdAt.slice(0, 10)}</td>
                            <td>{order.status}</td>
                            <td scope="row">{order._id}</td>
                            <td>
                              <a
                                className="btn btn-outline-success"
                                rel="stylesheet"
                                href={`/ordenes/${order.id}`}
                              >
                                <i className="fa-solid fa-pen"></i>
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
