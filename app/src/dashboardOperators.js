import React, { useState } from "react";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Operators = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChangeRegister = (e) => {
    e.preventDefault();
    const nData = { ...data, [e.target.name]: e.target.value };
    setData(nData);
    console.log(nData);
  };

  const onSubmit = async () => {
    try {
      data.rol = "operator";
      await axios.post("http://localhost:4000", data);
      navigate("/");
      alert("Registrado con éxito");
    } catch (error) {
      alert("Hubo un error");
    }
  };

  return (
    <Container className="operator">
      <h2>Panel de Autorización del Cliente</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Cliente</th>
            <th>Vehículo</th>
            <th>Fecha de Ingreso</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>Kia Sportage 2022</td>
            <td>2025-03-15</td>
            <td>Pendiente</td>
            <td>
              <Button variant="success" size="sm">Autorizar</Button>{" "}
              <Button variant="danger" size="sm">Rechazar</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>María López</td>
            <td>Kia Forte 2023</td>
            <td>2025-03-16</td>
            <td>Aprobado</td>
            <td>
              <Button variant="secondary" size="sm" disabled>Aprobado</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
