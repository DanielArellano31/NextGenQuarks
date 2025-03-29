import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,Image,
    ScrollView
  
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Modelop = () => {
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectOne, setSelectOne] = useState('');
    const [selectTwo, setSelectTwo] = useState('');

    const navigation  = useNavigation()

    const handleSubmit = () => {
        Alert.alert('Formulario Enviado', `Número: ${number}\nFecha: ${date}\nSelección 1: ${selectOne}\nSelección 2: ${selectTwo}`);
    };

    return (
        <View style={styles.container}>
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
                           </View> {/* Campo Número */}
            <View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Número</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={number}
                    onChangeText={setNumber}
                    placeholder="Ingresa un número"
                />
            </View>

            {/* Campo Fecha */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Fecha</Text>
                <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={setDate}
                    placeholder="YYYY-MM-DD"
                />
                {/* Nota: Para una mejor experiencia en fechas, considera usar un DatePicker específico para tu plataforma */}
            </View>

            {/* Selección 1 */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Selección 1</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectOne}
                        onValueChange={(itemValue) => setSelectOne(itemValue)}
                    >
                        <Picker.Item label="Seleccione una opción" value="" />
                        <Picker.Item label="Opción 1" value="op1" />
                        <Picker.Item label="Opción 2" value="op2" />
                        <Picker.Item label="Opción 3" value="op3" />
                    </Picker>
                </View>
            </View>

            {/* Selección 2 */}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Selección 2</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectTwo}
                        onValueChange={(itemValue) => setSelectTwo(itemValue)}
                    >
                        <Picker.Item label="Seleccione una opción" value="" />
                        <Picker.Item label="Opción A" value="opA" />
                        <Picker.Item label="Opción B" value="opB" />
                        <Picker.Item label="Opción C" value="opC" />
                    </Picker>
                </View>
            </View>

            {/* Botón Enviar */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 40,
        height: 40,
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

});

export default Modelop;
