import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import footer from "./images/foot.png"
import "./App.css";

const App = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    //e.preventDefault(); // Para evitar el refresco de la página
    try {
      data.rol = "operator";
      const res = await axios.post("http://localhost:4000/login", data);
      const user = res.data.user;
      user.logined = true;

      navigate("/mechanic");
      alert("¡BIENVENIDO!");
    } catch (error) {
      alert("Datos incorrectos, intenta nuevamente.");
    }
  };

  return (
    <Container className="container">
      <Card className="form">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Yovoy Fixed" className="logo" />
        </div>


        <h2 className="title">Inicio de sesión</h2>
        <p className="subtitle">Bienvenido a YOVOY FIXED</p>

        <form onSubmit={onSubmit}>
          {/* Input Email */}
          <div className="input-container">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="input"
              value={data.email || ""}
              onChange={onChange}
              required
            />
          </div>

          {/* Input Contraseña */}
          <div className="input-container">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="input"
              value={data.password || ""}
              onChange={onChange}
              required
            />
          </div>




          {/* Botón Iniciar Sesión */}
          <button type="submit" className="button-submit">
            Iniciar Sesión
          </button>

          {/* Registro */}
          <p className="register-text">
            ¿Aún no te registras?{" "}
            <span className="link" onClick={() => navigate("/Register")}>
              Crea tu cuenta
            </span>
          </p>
        </form>

        <footer className="footer">
          <img src={footer} alt="Footer Image" className="footer-image" />
        </footer>

      </Card>
    </Container>
  );
};

export default App;
