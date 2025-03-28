import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Layout = ({ children }) => {

    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.navItem}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.navItem}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.navItem}>Configuración</Text>
                </TouchableOpacity>
            </View>

            {/* Contenido */}
            <View style={styles.content}>{children}</View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2025 Mi Aplicación</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007bff',
    },
    navbar: {
        height: 50,
        backgroundColor: '#333c87',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
        backgroundColor: '#333c87',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Layout;
