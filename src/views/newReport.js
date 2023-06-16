import { useState } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, Button, StyleSheet } from 'react-native';

const NewReport = ({navigation}) => {
    const [description, setDescription] = useState('');

    const handleSend = () => {
        // Lógica para enviar a descrição da imagem
        console.log('Descrição:', description);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Título da Imagem</Text>
            <Image
                source={require('./agua-parada.jpeg')} // Coloque o caminho para a imagem desejada
                style={styles.image}
            />
            <TextInput
                placeholder="Digite a descrição da imagem"
                onChangeText={text => setDescription(text)}
                value={description}
                style={styles.input}
                multiline={true} // Permite que o campo de texto tenha várias linhas
            />
            <Button
                title="Enviar"
                onPress={handleSend}
                style={styles.button}
                color="#FF0000" // Altere a cor do botão conforme necessário
            />
            <TouchableHighlight onPress={() => navigation.navigate('Main')}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 50,
    },
    button: {
      borderRadius: 1000, // Suaviza as bordas do botão
      marginTop: 160, // Altere a posição do botão conforme necessário
      width: 250, // Ajuste o tamanho do botão conforme necessário
    },
    input: {
      width: '100%',
      height: 120, // Ajuste o tamanho da caixa de texto conforme necessário
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius: 8, // Suaviza as bordas da caixa de texto
    },
  });

export default NewReport;