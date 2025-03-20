import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Para evitar el refresco de la página
    try {
      data.rol = "client";
      const res = await axios.post("http://localhost:4000/login", data);
      const user = res.data.user;
      user.logined = true;

      navigate("/modelo");
      alert("¡BIENVENIDO!");
    } catch (error) {
      alert("Incorrecto");
    }
  };

  return (
    <Container className="container">
      <Card className="form">
        <form >
          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input"
              value={data.email || ""}
              onChange={onChange}
            />
          </div>

          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="input"
              value={data.password || ""}
              onChange={onChange}
            />
          </div>

          <div className="flex-row">
            <div>
              <input
                type="checkbox"
                name="remember"
                checked={data.remember || false}
                onChange={onChange}
              />
              <label>Remember me</label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <p className="text-center mb-1">
            ¿No tienes cuenta?{" "}
            <button
              variant="link"
              onClick={() => navigate("/Register")}
            >
              Regístrate
            </button>
          </p>

          <button type="submit" className="button-submit" onClick={() => onSubmit()}>Sign In</button>
        </form>
      </Card>
    </Container>
  );
};

export default App;
