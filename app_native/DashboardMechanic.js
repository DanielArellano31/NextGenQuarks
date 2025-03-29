import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MechanicView = () => {
    const [statuses, setStatuses] = useState({});
    const [observations, setObservations] = useState({});
    const [sNumber, setSNumber] = useState({});
    const [unitNumber, setUnitNumber] = useState("");

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
        // Agregar más operaciones según sea necesario...
    ];

    const handleSaveData = () => {
        const data = {
            unitNumber,
            statuses,
            sNumber,
            observations,
        };
        AsyncStorage.setItem("mechanicData", JSON.stringify(data))
        Alert.alert('Datos guardados', 'Los datos han sido guardados exitosamente.');
        // Nota: localStorage no está soportado en React Native.
        // Puedes usar AsyncStorage para persistir datos en su lugar.
    };
    const handleReset = async () => {
        try {
            await AsyncStorage.removeItem('mechanicData');
            setUnitNumber('');
            setStatuses({});
            setObservations({});
            setData(null);
        } catch (error) {
            console.error('Error al eliminar datos:', error);
        }
    };

    const renderRow = ({ item, index }) => (
        <View style={styles.row}>
            <TextInput
                style={[styles.input, styles.select]}
                value={statuses[index] || ""}
                onChangeText={(value) => setStatuses({ ...statuses, [index]: value })}
                placeholder="Estado (Ej: Urgente, Bien, etc.)"
            />
            <Text style={styles.cell}>{item}</Text>
            <TextInput
                style={styles.input}
                value={sNumber[index] || ""}
                onChangeText={(value) => setSNumber({ ...sNumber, [index]: value })}
                placeholder="Nº de serie"
            />
            <TextInput
                style={styles.input}
                value={observations[index] || ""}
                onChangeText={(value) => setObservations({ ...observations, [index]: value })}
                placeholder="Observaciones"
            />
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Vista Mecánico</Text>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Número de Unidad</Text>
                <TextInput
                    style={styles.unitInput}
                    keyboardType="numeric"
                    value={unitNumber}
                    onChangeText={(value) => setUnitNumber(value)}
                    placeholder="Ingresa el número de unidad"
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.tableHeader}>Operaciones</Text>
                <FlatList
                    data={operations}
                    renderItem={({ item, index }) => renderRow({ item, index })}
                    keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveData}>
                    <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
             <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                                    <Text style={styles.resetButtonText}>Nueva hoja</Text>
                                </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    unitInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    tableHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cell: {
        flex: 1,
        fontSize: 14,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        fontSize: 14,
        marginHorizontal: 5,
    },
    select: {
        backgroundColor: '#e9ecef',
    },
    saveButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
