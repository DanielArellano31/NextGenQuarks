// MechanicView.jsx
import React, { useState, useEffect } from "react";
import { Table, Container, Form, Card, Button } from "react-bootstrap";

export const MechanicView = () => {
    const [statuses, setStatuses] = useState({});
    const [observations, setObservations] = useState({});
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

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("mechanicData")) || {};
        setUnitNumber(savedData.unitNumber || "");
        setStatuses(savedData.statuses || {});
        setObservations(savedData.observations || {});
    }, []);

    const handleSaveData = () => {
        const data = {
            unitNumber,
            statuses,
            observations,
        };
        localStorage.setItem("mechanicData", JSON.stringify(data));
    };


    return (

        <Container className="page-content">
            {/* Título fijo */}
            <h2 className="fixed-title">Vista Mecánico</h2>

            {/* Entrada numérica para el número de unidad */}
            <Form.Group style={{ marginBottom: "20px", textAlign: "center" }}>
                <Form.Label>Número de Unidad</Form.Label>
                <Form.Control
                    type="number"
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    placeholder="Ingresa el número de unidad"
                    style={{ maxWidth: "200px", margin: "0 auto" }}
                />
            </Form.Group>
            <Card>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Operación</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((operation, index) => (
                            <tr key={index}>
                                <td>
                                    <Form.Select
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