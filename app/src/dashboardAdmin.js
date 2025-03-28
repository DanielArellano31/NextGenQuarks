import React, { useState } from "react";
import { Button, Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboardadmin.css";

export const Admin = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  return (
    <Container className="admin-container">
      <h2 className="admin-title">Panel de Autorización</h2>
      <Table striped bordered hover className="admin-table">
        <thead className="admin-table-header">
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
          <tr className="admin-table-row">
            <td>1</td>
            <td>Juan Pérez</td>
            <td>1345</td>
            <td>2025-03-15</td>
            <td>05</td>
            <td className="status-pending">Pendiente</td>
            <td>
              <Button className="btn-authorize">Autorizar</Button>
              <Button variant="danger" size="sm" className="btn-reject">Rechazar</Button>
              <Button variant="secondary" size="sm" className="btn-read">Leer reporte</Button>
            </td>
          </tr>
          <tr className="admin-table-row">
            <td>2</td>
            <td>María López</td>
            <td>4257</td>
            <td>2025-03-09</td>
            <td>02</td>
            <td className="status-approved">Aprobado</td>
            <td>
              <Button variant="secondary" size="sm" disabled className="btn-approved">Aprobado</Button>
              <Button variant="danger" size="sm" className="btn-delete">Eliminar</Button>
              <Button variant="secondary" size="sm" className="btn-read">Leer reporte</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
