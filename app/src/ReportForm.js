import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import "./ReportForm.css";

export const ReportForm = () => {
    const [reportData, setReportData] = useState({
        operatorName: "",
        unitNumber: "",
        reportDate: "",
        importance: "",
        description: ""
    });

    const handleChange = (e) => {
        setReportData({
            ...reportData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!reportData.operatorName || !reportData.unitNumber || !reportData.reportDate || !reportData.importance || !reportData.description) {
            alert("Todos los campos son obligatorios");
            return;
        }

        try {
            await axios.post("http://localhost:4000/reports", reportData);
            alert("Reporte enviado con éxito");
            setReportData({
                operatorName: "",
                unitNumber: "",
                reportDate: "",
                importance: "",
                description: ""
            });
        } catch (error) {
            console.error("Error enviando el reporte:", error);
            alert("Hubo un error al enviar el reporte");
        }
    };

    return (
        <Container className="mt-4">
            <Card className="p-4">
                <h2 className="text-center">Haz tu Reporte aquí</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre del Operador</Form.Label>
                        <Form.Control
                            type="text"
                            name="operatorName"
                            value={reportData.operatorName}
                            onChange={handleChange}
                            placeholder="Nombre del operador"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Número de la Unidad</Form.Label>
                        <Form.Control
                            type="number"
                            name="unitNumber"
                            value={reportData.unitNumber}
                            onChange={handleChange}
                            placeholder="Ingrese el número de unidad"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Fecha del Reporte</Form.Label>
                        <Form.Control
                            type="String"
                            name="reportDate"
                            value={reportData.reportDate}
                            onChange={handleChange}
                            placeholder="DD/MM/AA"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Grado de Importancia <b>(1 es poco 5 es urgente)</b></Form.Label>
                        <Form.Control 
                        type="Number"
                        name="grade"
                        value={reportData.importance}
                        onChange={handleChange}
                        placeholder="Del 1 al 5">
                            
                            
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Descripción del Reporte</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={reportData.description}
                            onChange={handleChange}
                            placeholder="Describa el problema o situación"
                            required
                        />
                    </Form.Group>

                    <Button className="mt-3 w-100" variant="primary" type="submit">
                        Enviar Reporte
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

