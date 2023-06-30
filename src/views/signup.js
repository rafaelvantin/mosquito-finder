import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'
import { set } from 'react-native-reanimated';

const SignUp = ({navigation}) => {

    const height = useHeaderHeight();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleCPFChange = (text) => {
        // Remove caracteres especiais do CPF (pontuação)
        const cleanedCpf = text.replace(/[^\d]/g, '');

        // Aplica a máscara do CPF (NNN.NNN.NNN-NN)
        let maskedCpf = '';
        if (cleanedCpf.length <= 11) {
            maskedCpf = cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else {
            maskedCpf = cleanedCpf;
        }

        setCpf(maskedCpf);
    };


    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.h1}>Crie sua conta</Text>
            <Text style={styles.h2}>Para começar a usar o app.</Text>
            
            <TextInput
                ref={(ref) => { this.nameInput = ref; }}
                style={styles.input}
                value={name}
                onChangeText={(e) => setName(e)}
                placeholder='Nome'
            />

            <TextInput
                ref={(ref) => { this.emailInput = ref; }}
                style={styles.input}
                value={email}
                onChangeText={(e) => setEmail(e)}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder='Email'
            />

            <TextInput
                ref={(ref) => { this.cpfInput = ref; }}
                style={styles.input}
                value={cpf}
                onChangeText={handleCPFChange}
                keyboardType="numeric"
                maxLength={14}
                placeholder="CPF"
            />

            <TextInput
                ref={(ref) => { this.newPasswordInput = ref; }}
                style={styles.input}
                value={password}
                secureTextEntry
                onChangeText={(e) => setPassword(e)}
                placeholder='Senha'
            />

            <TextInput
                ref={(ref) => { this.confirmPasswordInput = ref; }}
                style={styles.input}
                value={passwordConfirmation}
                secureTextEntry
                onChangeText={(e) => setPasswordConfirmation(e)}
                placeholder='Confirme a senha'
            />

            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableHighlight>

            
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 70,
        backgroundColor: '#F8F8F8',
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
    input: {
        height: 60,
        marginVertical: 12,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 10,
        borderColor: '#999999',
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
});


export default SignUp;