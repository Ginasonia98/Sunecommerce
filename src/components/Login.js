import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Login = ({ token, setToken }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setPassword("");
    setUsername("");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  return (
    <div
      className="login-form"
    >
        <h2 className="text-white text-decoration-underline">Login Form</h2>
        <div className="form-group">
        <label htmlFor="username" className="text-white">Username</label>
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        </div>
        <div className="form-group">
        <label htmlFor="password" className="text-white">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {error && <small>{error}</small>}
        </div>
        <button className="mt-3 text-white bg-primary w-25" style={{border:"none"}} onClick={loginHandler}>Login</button>
        <br />
        <div
          className="register-text mt-2"
          style={{
            color: "white",
          }}
        >
          Belum Memiliki Akun
          <span className=" ms-2 text-decoration-underline">Silahkan Register!
          </span>
        </div>
    </div>
  );
};

export default Login;
