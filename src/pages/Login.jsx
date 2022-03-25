import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="containerLogin">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:700,600"
          rel="stylesheet"
          type="text/css"
        />

        <form method="post" action="index.html">
          <div className="box">
            <h1 className="title">Dashboard</h1>

            <input
              type="email"
              name="email"
              defaultValue={"email"}
              // onFocus="field_focus(this, 'email');"
              // onBlur="field_blur(this, 'email');"
              className="email"
            />

            <input
              type="password"
              name="email"
              defaultValue={"email"}
              // onFocus="field_focus(this, 'email');"
              // onBlur="field_blur(this, 'email');"
              className="email"
            />

            <span href="#">
              <div className="btn">Sign In</div>
            </span>

            <span href="#">
              <div id="btn2">Sign Up</div>
            </span>
          </div>
        </form>

        <p className="pass">Forgot your password?</p>
      </div>
    </>
  );
}

export default Login;
