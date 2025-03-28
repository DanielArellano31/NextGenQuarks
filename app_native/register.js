import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const RegisterUser = () => {
    const [data, setData] = useState({
        name: '',
        lastNames: '',
        email: '',
        password: '',
        rol: 'operator',
    });
    const [isModalVisible, setIsModalVisible] = useState(false); // Controla la visibilidad del modal
    const [roles] = useState([
        { label: 'Administrador', value: 'administrator' },
        { label: 'Mecánico', value: 'mechanic' },
        { label: 'Operador', value: 'operator' },
    ]);

    const navigation = useNavigation();

    const onChangeRegister = (key, value) => {
        setData(prevData => ({ ...prevData, [key]: value }));
    };

    const selectRole = (value) => {
        setData(prevData => ({ ...prevData, rol: value }));
        setIsModalVisible(false);
    };

    const onSubmit = async () => {
        try {
            await axios.post('https://zv6c2klc-4000.usw3.devtunnels.ms/register', data);
            Alert.alert('¡Éxito!', 'Registrado con éxito');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Hubo un error al registrarse');
        }
    };

    return (
        <View style={styles.container}>
                <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                </View>

                <Text style={styles.title}>¡Regístrate aquí!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    onChangeText={(value) => onChangeRegister('name', value)}
                    value={data.name}
                />
               
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    keyboardType="email-address"
                    onChangeText={(value) => onChangeRegister('email', value)}
                    value={data.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    onChangeText={(value) => onChangeRegister('password', value)}
                    value={data.password}
                />
                <TouchableOpacity
                    style={styles.selector}
                    onPress={() => setIsModalVisible(true)}
                >
                    <Text style={styles.selectorText}>
                        {data.rol ? roles.find(r => r.value === data.rol)?.label : 'Selecciona un rol'}
                    </Text>
                </TouchableOpacity>
                <Modal
                    visible={isModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Selecciona un rol</Text>
                            <FlatList
                                data={roles}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.modalItem}
                                        onPress={() => selectRole(item.value)}
                                    >
                                        <Text style={styles.modalItemText}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                            <Button title="Cerrar" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>¡Regístrate!</Text>
                </TouchableOpacity>
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Home')}
                >
                    ¿Ya tienes cuenta? Inicia sesión aquí
                </Text>
        </ScrollView>
                <View style={styles.footer}>
                    <Image source={require('./images/foot.png')} style={styles.footerImage} />
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    selector: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    selectorText: {
        color: '#333',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    modalItemText: {
        fontSize: 16,
        color: '#333',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
    footer: {
        alignItems: 'center',
        verticalAlign: 'bottom',
        marginTop: 10,
    },
    footerImage: {
        width: '100%',
        height: 500,
        margin: "-200px",
      
        marginVertical:"-500px"
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        color: '#007BFF',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
