import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "./Register.css";



export const RegisterUser = () => {
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
            await axios.post("https://zv6c2klc-4000.usw3.devtunnels.ms/register", data);
            navigate("/");
            alert("Registrado con éxito");
        } catch (error) {
            alert("Hubo un error");
        }
    };

    return (
        <Container className="register-page">
            <div className="register-container">
                <div className="register-image-section"></div>
                <div className="register-form-section">
                    <Card className="register-card">
                        <Card.Body>
                            <Card.Title className="register-title">¡Regístrate aquí!</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="register-label">Nombre:</Form.Label>
                                    <Form.Control
                                        className="register-input"
                                        onChange={onChangeRegister}
                                        name="name"
                                        placeholder="Ingresa tu nombre"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="register-label">Apellidos:</Form.Label>
                                    <Form.Control
                                        className="register-input"
                                        onChange={onChangeRegister}
                                        name="lastNames"
                                        placeholder="Ingresa tu apellido"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="register-label">Correo:</Form.Label>
                                    <Form.Control
                                        className="register-input"
                                        onChange={onChangeRegister}
                                        name="email"
                                        type="email"
                                        placeholder="Ingresa tu correo"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="register-label">Contraseña:</Form.Label>
                                    <Form.Control
                                        className="register-input"
                                        onChange={onChangeRegister}
                                        name="password"
                                        type="password"
                                        placeholder="Ingresa tu contraseña"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Select >
                                        <option>Rol</option>
                                        <option name="administrator">Administrador</option>
                                        <option name="mechanic">Mecanico</option>
                                        <option name="operator">Operador</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button className="register-button" onClick={onSubmit}>
                                    ¡Regístrate!
                                </Button>
                                <p className="register-link">
                                    ¿Ya tienes cuenta?{" "}
                                    <Button onClick={() => navigate("/")}>Inicia sesión aquí</Button>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};
