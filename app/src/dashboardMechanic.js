import React, { useState } from "react";
import { Table, Container, Form, Card } from "react-bootstrap";
import "./MechanicView.css";

export const MechanicView = () => {
    const [unitNumber, setUnitNumber] = useState(""); // Estado para el número de unidad
    const [observations, setObservations] = useState({}); // Estado para observaciones dinámicas en la tabla
    const [statuses, setStatuses] = useState({}); // Estado para los menús desplegables

    const [frontStatuses, setFrontStatuses] = useState({});
    const [rearStatuses, setRearStatuses] = useState({});

    const [tireStatuses, setTireStatuses] = useState({}); // Estado para la tabla de llantas

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

    const rows = [
        "Pastillas/Zapata",
        "Disco/Tambor",
    ];

    const tires = [
        { position: "Frontal Izquierdo", brand: "Kumho 205/55 R16" },
        { position: "Frontal Derecho", brand: "Kumho 205/55 R16" },
        { position: "Trasero Izquierdo", brand: "Kumho 205/55 R16" },
        { position: "Trasero Derecho", brand: "Kumho 205/55 R16" },
        { position: "Llanta de Repuesto", brand: "cst 125/80 R15" },
    ];

    const handleObservationsChange = (index, value) => {
        setObservations({ ...observations, [index]: value });
    };

    const handleStatusChange = (index, value) => {
        setStatuses({ ...statuses, [index]: value });
    };

    const handleFrontStatusChange = (index, value) => {
        setFrontStatuses({ ...frontStatuses, [index]: value });
    };

    const handleRearStatusChange = (index, value) => {
        setRearStatuses({ ...rearStatuses, [index]: value });
    };

    const handleTireStatusChange = (rowIndex, columnIndex, value) => {
        const rowStatuses = tireStatuses[rowIndex] || {};
        rowStatuses[columnIndex] = value;
        setTireStatuses({ ...tireStatuses, [rowIndex]: rowStatuses });
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

            <Card className="cardF">
                {/* Primera tabla: Vista Mecánico */}
                <Table striped bordered hover className="table-spacing">
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
                                        onChange={(e) =>
                                            handleStatusChange(index, e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            handleObservationsChange(index, e.target.value)
                                        }
                                        placeholder="Ingresa las observaciones"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* Segunda tabla: Condición de Frenos */}
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>Condición de Frenos</h3>
                <Table striped bordered hover className="table-spacing">
                    <thead>
                        <tr>
                            <th>Delantero</th>
                            <th>Estado</th>
                            <th>Trasero</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row}</td>
                                <td>
                                    <Form.Select
                                        value={frontStatuses[index] || ""}
                                        onChange={(e) =>
                                            handleFrontStatusChange(index, e.target.value)
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                                <td>{row}</td>
                                <td>
                                    <Form.Select
                                        value={rearStatuses[index] || ""}
                                        onChange={(e) =>
                                            handleRearStatusChange(index, e.target.value)
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>Condición de Llantas</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Llanta</th>
                            <th>Marca y Tamaño</th>
                            <th>Exterior</th>
                            <th>Central</th>
                            <th>Interior</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tires.map((tire, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{tire.position}</td>
                                <td>{tire.brand}</td>
                                <td>
                                    <Form.Select
                                        value={tireStatuses[rowIndex]?.[0] || ""}
                                        onChange={(e) =>
                                            handleTireStatusChange(rowIndex, 0, e.target.value)
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select
                                        value={tireStatuses[rowIndex]?.[1] || ""}
                                        onChange={(e) =>
                                            handleTireStatusChange(rowIndex, 1, e.target.value)
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select
                                        value={tireStatuses[rowIndex]?.[2] || ""}
                                        onChange={(e) =>
                                            handleTireStatusChange(rowIndex, 2, e.target.value)
                                        }
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="Recomendado">Recomendado</option>
                                        <option value="Bien">Bien</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Container>
    );
};
