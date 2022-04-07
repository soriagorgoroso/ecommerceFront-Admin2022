import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/userActions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/tokens`,
        {
          email: data,
          password: password,
        }
      );
      dispatch(actions.login(response.data));
      navigate("/admin");
    } catch (error) {
      setErrorMessage("Error!");
      console.log(error);
    }
  };
  return (
    <>
      <div className="containerLogin d-flex justify-content-center align-items-center">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:700,600"
          rel="stylesheet"
          type="text/css"
        />

        <form method="post" action="index.html" onSubmit={handleSubmit}>
          <div className="box">
            <h1 className="title pt-2">Ingresa</h1>

            <input
              type="email"
              name="email"
              // onFocus="field_focus(this, 'email');"
              // onBlur="field_blur(this, 'email');"
              autoComplete="username"
              className="email"
              placeholder="admin@hackbier.com"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <input
              type="password"
              name="password"
              // onFocus="field_focus(this, 'password');"
              // onBlur="field_blur(this, 'password');"
              autoComplete="current-password"
              className="email"
              placeholder="admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="pass pt-1">Olvidaste tu contraseña?</p>
            <div className="d-flex justify-content-center">
              {" "}
              <button type="submit " className="btn">
                INGRESAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
