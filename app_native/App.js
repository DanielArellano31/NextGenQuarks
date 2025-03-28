import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const onChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    try {
      data.rol = "operator";
      const res = await axios.post("/login", data);
      console.log(res)
      const user = res.data.user;
      user.logined = true;
      navigation.navigate("Home")

      Alert.alert("¡BIENVENIDO!");
    } catch (error) {
      Alert.alert("Datos incorrectos, intenta nuevamente.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require("./images/logo.png")} style={styles.logo} />
        </View>

        <Text style={styles.title}>Inicio de sesión</Text>
        <Text style={styles.subtitle}>Bienvenido a YOVOY FIXED</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            onChangeText={(value) => onChange("email", value)}
            value={data.email || ""}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={(value) => onChange("password", value)}
            value={data.password || ""}
            secureTextEntry
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DasboardAdmin")}>
          <Text style={styles.buttonText}>boton</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <Text style={styles.registerText}>
          ¿Aún no te registras?{"/register"}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Crea tu cuenta
          </Text>
        </Text>

        <View style={styles.footer}>
          <Image source={require("./images/foot.png")} style={styles.footerImage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",

  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    marginVertical: 10,
  },
  link: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerImage: {
    width: "100%",
    height: 500,
    width: 400,
    margin: 100
  },
});

export default App;
