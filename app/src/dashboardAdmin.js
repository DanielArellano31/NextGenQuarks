import React, { useState } from "react";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Admin = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();




  return (
    <Container className="operator">
      <h2>Panel de Autorización</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Operador</th>
            <th>nº Unidad</th>
            <th>Fecha del reporte</th>
            <th>Grado</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>1345</td>
            <td>2025-03-15</td>
            <td>05</td>
            <td>Pendiente</td>
            <td>
              <Button variant="success" size="sm">Autorizar</Button>
              <Button variant="danger" size="sm">Rechazar</Button>
              <Button variant="secondary" size="sm" >Leer reporte</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>María López</td>
            <td>4257</td>
            <td>2025-03-09</td>
            <td>02</td>
            <td>Aprobado</td>
            <td>

              <Button variant="secondary" size="sm" disabled>Aprobado</Button>
              <Button variant="danger" size="sm" >Eliminar</Button>
              <Button variant="secondary" size="sm" >Leer reporte</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
