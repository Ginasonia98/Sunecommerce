import React,{useState} from 'react'
import "../App.css";
import axios from 'axios';

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
      className="login "
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/4f/1b/f7/4f1bf740871685e8f233ee0cb54101f3.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-inputs py-3 px-2">
        <div className="text-login ">Login</div>
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        {error && <small>{error}</small>}
        <button onClick={loginHandler}>Login</button>
        <br/>
        <div className="register-text" style={{
          color:"white",
        }}>
          Belum Memiliki Akun, Silahkan Register!
        </div>
      </div>
    </div>
  );
};

export default Login
