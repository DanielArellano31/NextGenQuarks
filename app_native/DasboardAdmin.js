import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView,Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AuthorizationPanel = () => {
    // Datos de ejemplo para la tabla
      const navigation = useNavigation();
    
    const data = [
        {
            id: '1',
            name: 'Juan Pérez',
            unit: '1345',
            reportDate: '2025-03-15',
            grade: '05',
            status: 'Pendiente',
            actions: ['Autorizar', 'Rechazar', 'Leer reporte'],
        },
        {
            id: '2',
            name: 'María López',
            unit: '4257',
            reportDate: '2025-03-09',
            grade: '02',
            status: 'Aprobado',
            actions: ['Aprobado', 'Eliminar', 'Leer reporte'],
        },
    ];

    // Función para manejar las acciones
    const handleAction = (action, name) => {
        Alert.alert(`Acción seleccionada`, `${action} para ${name}`);
    };

    const renderRow = ({ item }) => (
       <ScrollView>

       <View style={styles.row}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.unit}</Text>
            <Text style={styles.cell}>{item.reportDate}</Text>
            <Text style={styles.cell}>{item.grade}</Text>
            <Text style={styles.cell}>{item.status}</Text>
            <View style={styles.actions}>
                {item.actions.map((action, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.actionButton,
                            action === 'Autorizar' && styles.successButton,
                            action === 'Rechazar' && styles.dangerButton,
                            action === 'Leer reporte' && styles.secondaryButton,
                            action === 'Aprobado' && styles.disabledButton,
                        ]}
                        onPress={() =>
                            action !== 'Aprobado'
                                ? handleAction(action, item.name)
                                : null
                        }
                        disabled={action === 'Aprobado'}
                    >
                        <Text style={styles.buttonText}>{action}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
       </ScrollView>
    );

    return (
        <ScrollView>
            <View style={styles.navbar} >
                        <Image source={require("./images/logo.png")} style={styles.logo}  ></Image>
                           <TouchableOpacity onPress={() => navigation.navigate('Mechanic')}>
                               <Text style={styles.navItem}>Mecanico</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('Operator')}>
                               <Text style={styles.navItem}>Operador</Text>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => navigation.navigate('modelo')}>
                               <Text style={styles.navItem}>Modelo</Text>
                           </TouchableOpacity>
                </View>
            <ScrollView horizontal={true}>
            <View >
                <Text style={styles.title}>Panel de Autorización</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerCell}>#</Text>
                    <Text style={styles.headerCell}>Nombre del Operador</Text>
                    <Text style={styles.headerCell}>nº Unidad</Text>
                    <Text style={styles.headerCell}>Fecha del reporte</Text>
                    <Text style={styles.headerCell}>Grado</Text>
                    <Text style={styles.headerCell}>Estado</Text>
                    <Text style={styles.headerCell}>Acciones</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderRow}
                    keyExtractor={(item) => item.id}
                />
            </View>
            </ScrollView>
            <View style={styles.footer}>
                            <Image source={require("./images/foot.png")}></Image>
                        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: "10, 10, 10 ,10 ",
        backgroundColor: '#f8f9fa',
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginTop:20,
        flexDirection:"column"
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'start',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 5,
    },
    headerCell: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign:"center",
        paddingHorizontal:-100
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingHorizontal: -100
    },
    cell: {
        flex: 1,
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
    },
    actions: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionButton: {
        padding: 5,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successButton: {
        backgroundColor: '#28a745',
    },
    dangerButton: {
        backgroundColor: '#dc3545',
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
    },
    disabledButton: {
        backgroundColor: '#c8c8c8',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    navbar: {
        height: 50,
        backgroundColor: '#572364',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:"100"
    },
    navItem: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    footer: {
        height: 40,
        backgroundColor: '#572364',
        justifyContent: 'end',
        alignItems: 'baseline',
        marginTop :"300"   
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
    logo: {
        width: 40,
        height: 40,
      },
});
