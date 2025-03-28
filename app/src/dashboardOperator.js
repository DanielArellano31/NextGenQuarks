import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

export const OperatorView = () => {
    const [data, setData] = useState(null);
    const [unitNumber, setUnitNumber] = useState("");
    const [statuses, setStatuses] = useState({});
    const [observations, setObservations] = useState({});


    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("mechanicData"));
        if (savedData) setData(savedData);
    }, []);

    const handleReset = () => {
        localStorage.removeItem("mechanicData");
        setUnitNumber("");
        setStatuses({});
        setObservations({})
    }

    return (
        <Container>
            <h2>Vista Operador</h2>
            {data ? (
                <>
                    <h4>Número de Unidad: {data.unitNumber}</h4>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Estado</th>
                                <th>Observaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data.statuses).map((index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{data.statuses[index]}</td>
                                    <td>{data.observations[index] || "Sin observaciones"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button variant="danger" onClick={handleReset}>Nueva hoja</Button>
                </>
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </Container>
    );
};
