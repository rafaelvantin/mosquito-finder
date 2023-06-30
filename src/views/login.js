import React, { useState, useContext } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

import { authenticate } from '../services/user';

import { UserContext } from '../store/userContext.js';

    
const Login = ({navigation}) => {
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { login } = useContext(UserContext);


    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Bem vindo de volta!</Text>
            <Text style={styles.h2}>Faça seu login com seu email.</Text>
            
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(e) => setEmail(e)} 
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Email" />
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry
                onChangeText={(p) => setPassword(p)}
                placeholder='Senha'
            />

            <TouchableHighlight style={styles.button} onPress={() => login(email, password)}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Clique aqui para se cadastrar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 70,
        backgroundColor: '#F8F8F8',
    },
    input: {
        height: 60,
        marginVertical: 12,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
    },
    button: {
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "#169C89",
        paddingVertical: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#169C89',
        marginBottom: 0,
    },
    h2: {
        fontSize: 20,
        marginBottom: 50,
        color: '#999999',
    },
    signup: {
        marginTop: 25,
        alignItems: "center",
    },
    signupText: {
        color: '#999999',
        fontSize: 17,
    },


});

export default Login;