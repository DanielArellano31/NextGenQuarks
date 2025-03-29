import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import {Picker} from '@react-native-picker/picker';


export const ReportForm = () => {
  const [reportData, setReportData] = useState({
    nameOperator: "",
    unityNumber: "",
    date: "",
    grade: "1",
    Description: "",
  });

  const handleChange = (name, value) => {
    setReportData({
      ...reportData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      !reportData.nameOperator ||
      !reportData.unityNumber ||
      !reportData.date ||
      !reportData.grade ||
      !reportData.Description
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      await axios.post("https://9114-200-68-138-1.ngrok-free.app/createReport", reportData);
      Alert.alert("Éxito", "Reporte enviado con éxito");
      setReportData({
        nameOperator: "",
        unityNumber: "",
        date: "",
        grade: "1",
        Description: "",
      });
    } catch (error) {
      console.error("Error enviando el reporte:", error);
      Alert.alert("Error", "Hubo un error al enviar el reporte");
    }
  };

  return (
    <ScrollView>
    <ScrollView contentContainerStyle={styles.container}>
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
      <Text style={styles.title}>Haz tu Reporte aquí</Text>

      <View style={styles.formGroup}>
        <Text>Nombre del Operador</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del operador"
          value={reportData.nameOperator}
          onChangeText={(value) => handleChange("nameOperator", value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text>Número de la Unidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el número de unidad"
          keyboardType="numeric"
          value={reportData.unityNumber}
          onChangeText={(value) => handleChange("unityNumber", value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text>Fecha del Reporte</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AA"
          value={reportData.date}
          onChangeText={(value) => handleChange("date", value)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text>Grado de Importancia (1 es poco, 5 es urgente)</Text>
        <Picker
          selectedValue={reportData.grade}
          onValueChange={(value) => handleChange("grade", value)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text>Descripción del Reporte</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Describa el problema o situación"
          multiline
          value={reportData.Description}
          onChangeText={(value) => handleChange("Description", value)}
        />
      </View>

      <Button title="Enviar Reporte" onPress={handleSubmit} />
    </ScrollView>
      <View style={styles.footer}>
                                  <Image source={require("./images/foot.png")}></Image>
                              </View>
                              </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fff",
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