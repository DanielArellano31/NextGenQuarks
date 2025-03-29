// MechanicView.jsx
import React, { useState } from "react";
import { Table, Container, Form, Card, Button } from "react-bootstrap";
import "./mechanic.css";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MechanicView = () => {
    const [statuses, setStatuses] = useState({});
    const [observations, setObservations] = useState({});
    const [sNumber, setSNumber] = useState("")
    const [unitNumber, setUnitNumber] = useState("")

    const operations = [
        "LIMPIAPARABRISAS",
        "Menús del Sistema de Información del Operador",
        "Transmisión Automática – Nivel de Líquido/Condición",
        "Transmisión Manual – Nivel de Líquido/Condición (Si Aplica)",
        "Líquido de Frenos – Nivel de Líquido/Condición",
        "Depósito de Refrigerante – Nivel de Líquido/Condición",
        "Líquido de Dirección Asistida – Nivel de Líquido/Condición",
        "Limpiador de Ventanas – Nivel de Líquido",
        "Estado de la Batería – Rendimiento y Terminales",
        "Aire Acondicionado o Ventilación Forzada",
        "Líneas de Frenos / Mangueras / Freno de Mano",
        "Frenos de Aire – Presión y Fugas",
        "Funcionamiento del Embrague (Si Está Equipado)",
        "Funda de Junta Homocinética (CV, Si Es Requerido)",
        "Sistema de Refrigeración y Mangueras – Fugas Visibles y Daños",
        "Correas de Transmisión",
        "Sistema de Escape – Piezas Sueltas, Daños Visibles, Fugas",
        "Aceite y/o Fugas de Líquidos (Especifique)",
        "Operación de Claxon, Luces Interiores y Exteriores",
        "Verifique Parabrisas para Grietas, Astillas y Picaduras",
        "Operación de Limpiaparabrisas y Spray",
        "Dirección, Vínculos de Dirección, Cojinetes de las Ruedas",
        "Suspensión – Daño / Fugas / Desgaste",
        "Sistema de Pago Electrónico – Funcionamiento y Lectura de Tarjetas",
        "Pantalla de Información al Pasajero – Funcionamiento",
        "Cámaras de Seguridad – Grabación y Ángulo de Visión",
        "Puertas Automáticas – Apertura y Cierre Correcto",
        "Barras y Pasamanos – Firmeza y Estado General",
        "Espacio para Personas con Discapacidad – Rampas o Plataforma Operativa",
        "Luces de Señalización Electrónica – Destino y Número de Ruta",
        "GPS y Telemetría – Conectividad y Funcionamiento",
        "Espejos Laterales y Auxiliares – Ajuste y Estado",
        "Motor – Ruido Anormal, Vibraciones, Humo en Escape",
        "Otros (Especificar)",
    ];

    const handleSaveData = () => {
        const data = {
            unitNumber,
            statuses,
            sNumber,
            observations,
        };
       AsyncStorage.setItem("mechanicData", JSON.stringify(data));
    };


    return (

        <Container className="page-content">
            <h2 className="fixed-title">Vista Mecánico</h2>

            <Form.Group >
                <Form.Label>Número de Unidad</Form.Label>
                <Form.Control
                    type="number"
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    placeholder="Ingresa el número de unidad"
                    style={{ maxWidth: "200px", margin: "0 auto" }}
                />
            </Form.Group>
            <Card className="card-table">
                <Table className="table" striped bordered>
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Operación</th>
                            <th>Nº de serie</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((operation, index) => (
                            <tr key={index}>
                                <td>
                                    <Form.Select className="status"
                                        value={statuses[index] || ""}
                                        onChange={(e) => setStatuses({ ...statuses, [index]: e.target.value })}
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                                <td>{operation}</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        value={sNumber[index] || ""}
                                        onChange={(e) => setSNumber({ ...sNumber, [index]: e.target.value })}
                                        placeholder="De ser necesario"
                                    />


                                </td>
                                <td>
                                    <Form.Control className="observations"
                                        type="text"
                                        value={observations[index] || ""}
                                        onChange={(e) => setObservations({ ...observations, [index]: e.target.value })}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button onClick={handleSaveData}>Guardar</Button>
            </Card>
        </Container>
    );
};