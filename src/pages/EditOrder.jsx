import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
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
          <Row>
            <Col className="text-white">
              {" "}
              <h1>Editar Orden número: {order.id}</h1>
              <form onSubmit={handleSubmit} className="mb-5">
                <label className="mt-3 w-75 form-label" htmlFor="status">
                  Fecha
                </label>
                <p className="w-75 form-control">
                  {order.createdAt.slice(0, 10)}
                </p>
                <label className="mt-3 w-75 form-label" htmlFor="status">
                  Estado
                </label>
                <input
                  defaultValue={order.status}
                  className="w-75 form-control"
                  id="status"
                  type="text"
                  onChange={(ev) => {
                    setOrder({ ...order, status: ev.target.value });
                    setEditedOrder({ ...editedOrder, status: ev.target.value });
                  }}
                />
                {warning && <p className="text-danger">{warning}</p>}
                <button className="btn btn-success mt-3" type="submit">
                  Guardar cambios
                </button>
              </form>
              <a className="my-3 btn btn-danger" href="/ordenes">
                Ir atrás
              </a>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
}

export default EditOrder;
