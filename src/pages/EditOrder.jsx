import React from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditOrder() {
  const navigate = useNavigate();
  const params = useParams();
  const userLogged = useSelector((state) => state.user);
  const [warning, setWarning] = React.useState(null);
  const [order, setOrder] = React.useState(null);
  const [editedOrder, setEditedOrder] = React.useState({});

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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    for (const field in editedOrder) {
      if (field === "") return;
    }
    const response = await axios(
      {
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/orders/${order.id}`,
        headers: {
          Authorization: "Bearer " + userLogged.token,
        },
        data: editedOrder,
      },
      {
        validateStatus: function (status) {
          return status >= 200;
        },
      }
    );
    if (response.status === 200) {
      navigate("/ordenes");
    } else {
      setWarning(response.data.msg);
    }
  };

  return (
    order && (
      <>
        <NavBarAdmin />
        <Container>
          <Row xs={1} md={1} lg={7} className="d-flex justify-content-center">
            <Col className="w-75 ">
              {" "}
              <Card className="">
                <Card.Header>
                  <Card.Title>
                    <h1>Editar Orden número: {order.id}</h1>
                  </Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                  {" "}
                  <form onSubmit={handleSubmit} className="mb-5 col-7">
                    <label className="mt-3  form-label" htmlFor="status">
                      Fecha
                    </label>
                    <p className=" form-control">
                      {order.createdAt.slice(0, 10)}
                    </p>
                    <label className="mt-3  form-label" htmlFor="status">
                      Estado
                    </label>
                    <input
                      required
                      defaultValue={order.status}
                      className=" form-control"
                      id="status"
                      type="text"
                      onChange={(ev) => {
                        setOrder({ ...order, status: ev.target.value });
                        setEditedOrder({
                          ...editedOrder,
                          status: ev.target.value,
                        });
                      }}
                    />
                    {warning && <p className="text-danger">{warning}</p>}
                    <button className="btn btn-success mt-3" type="submit">
                      Guardar cambios
                    </button>
                  </form>
                </Card.Body>
                <a className="mt-3 btn btn-danger" href="/ordenes">
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

export default EditOrder;
