import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export const OperatorView = () => {
    const [data, setData] = useState(null);
    const [unitNumber, setUnitNumber] = useState('');
    const [statuses, setStatuses] = useState({});
    const [observations, setObservations] = useState({});
    const navigation = useNavigation();
    

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedData = await AsyncStorage.getItem('mechanicData');
                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    setData(parsedData);
                }
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };
        loadData();
    }, []);

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
            <Text style={styles.cell}>{item}</Text>
            <Text style={styles.cell}>{data.statuses[item]}</Text>
            <Text style={styles.cell}>
                {data.observations[item] || 'Sin observaciones'}
            </Text>
        </View>
    );

    return (
        
        
        
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Vista Operador</Text>
            {data ? (
                <>
                    <Text style={styles.subtitle}>
                        Número de Unidad: {data.unitNumber}
                    </Text>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerCell}>Operación</Text>
                        <Text style={styles.headerCell}>Estado</Text>
                        <Text style={styles.headerCell}>Observaciones</Text>
                    </View>
                    <FlatList
                        data={Object.keys(data.statuses)}
                        renderItem={renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity style={styles.resetButton} onPress={()=>navigation.navigate("report")}>
                        <Text style={styles.resetButtonText}>Crear un reporte</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.noData}>No hay datos disponibles</Text>
            )}
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
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 10,
    },
    headerCell: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
    },
    resetButton: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    resetButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    noData: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: '#6c757d',
    },
});
