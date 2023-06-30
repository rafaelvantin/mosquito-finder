import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const Profile = () => {
    const [name, setName] = useState('Matheus Giraldi Alvarenga');
    const [email, setEmail] = useState('matheus.giraldi@usp.br');
    const [cpf, setCpf] = useState('396.931.088-17');
    const [oldPassword, setOldPassword] = useState('teste123');
    const [oldPasswordUpdate, setOldPasswordUpdate] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSavingEnabled, setIsSavingEnabled] = useState(false);


    const resetForm = useCallback(() => {
        setName('Matheus Giraldi Alvarenga');
        setEmail('matheus.giraldi@usp.br');
        setCpf('396.931.088-17');
        setOldPassword('teste123');
        setOldPasswordUpdate('');
        setNewPassword('');
        setConfirmPassword('');
        setIsSavingEnabled(false);
    }, []);

    useFocusEffect(
        useCallback(() => {
            resetForm();
        }, [])
    );

    const handleNameChange = (text) => {
        setName(text);
        setIsSavingEnabled(text !== '' && email !== '' && cpf !== '' && oldPasswordUpdate !== '' && newPassword !== '' && confirmPassword !== '');
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsSavingEnabled(name !== '' && text !== '' && cpf !== '' && oldPasswordUpdate !== '' && newPassword !== '' && confirmPassword !== '');
    };

    const handleCpfChange = (text) => {
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
        setIsSavingEnabled(name !== '' && email !== '' && cleanedCpf !== '' && oldPasswordUpdate !== '' && newPassword !== '' && confirmPassword !== '');
    };

    const handleOldPasswordChange = (text) => {
        setOldPasswordUpdate(text);
        setIsSavingEnabled(name !== '' && email !== '' && cpf !== '' && text !== '' && newPassword !== '' && confirmPassword !== '');
    };

    const handleNewPasswordChange = (text) => {
        setNewPassword(text);
        setIsSavingEnabled(name !== '' && email !== '' && cpf !== '' && oldPasswordUpdate !== '' && text !== '' && confirmPassword !== '');
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        setIsSavingEnabled(name !== '' && email !== '' && cpf !== '' && oldPasswordUpdate !== '' && newPassword !== '' && text !== '');
    };

    const handleSubmit = () => {
        if (oldPassword !== oldPasswordUpdate) { // Substitua 'senhaAntiga' pela senha recuperada do banco de dados
            alert('Senha antiga incorreta');
            setOldPasswordUpdate('');

            this.oldPasswordUpdateInput.focus();

            return;
        }

        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem');

            setNewPassword('');
            setConfirmPassword('');

            this.newPasswordInput.focus();

            return;
        }

        if (newPassword.length < 4) {
            alert('A senha deve ter pelo menos 4 caracteres');

            setNewPassword('');
            setConfirmPassword('');

            this.newPasswordInput.focus();

            return;
        }

        setOldPasswordUpdate('');
        setNewPassword('');
        setConfirmPassword('');

        alert('Perfil atualizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Text style={{fontSize:30, fontWeight: 'bold', marginTop: 30, marginBottom:20, marginLeft: 15}}>Atualização de dados</Text>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                ref={(ref) => { this.nameInput = ref; }}
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                ref={(ref) => { this.emailInput = ref; }}
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>CPF:</Text>
            <TextInput
                ref={(ref) => { this.cpfInput = ref; }}
                style={styles.input}
                value={cpf}
                onChangeText={handleCpfChange}
                keyboardType="numeric"
                maxLength={14}
                placeholder="000.000.000-00"
            />

            <Text style={styles.label}>Senha antiga:</Text>
            <TextInput
                ref={(ref) => { this.oldPasswordUpdateInput = ref; }}
                style={styles.input}
                value={oldPasswordUpdate}
                secureTextEntry
                onChangeText={handleOldPasswordChange}
            />

            <Text style={styles.label}>Nova senha:</Text>
            <TextInput
                ref={(ref) => { this.newPasswordInput = ref; }}
                style={styles.input}
                value={newPassword}
                secureTextEntry
                onChangeText={handleNewPasswordChange}
            />

            <Text style={styles.label}>Confirme a nova senha:</Text>
            <TextInput
                ref={(ref) => { this.confirmPasswordInput = ref; }}
                style={styles.input}
                value={confirmPassword}
                secureTextEntry
                onChangeText={handleConfirmPasswordChange}
            />
            <Pressable style={styles.button} onPress={handleSubmit} disabled={!isSavingEnabled}>
                <Text style={styles.text}>{'SALVAR'}</Text>
            </Pressable>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 9,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#169C89',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});


export default Profile;
