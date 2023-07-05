import { useState, useContext } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, Button, StyleSheet } from 'react-native';

import { ReportContext } from '../store/reportContext';

const NewReport = ({navigation, route}) => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const { image, coordinates } = route.params;

    const { addReport } = useContext(ReportContext);

    const handleSend = () => {
        addReport({
          description: description,
          image: `data:image/jpeg;base64,${image}`,
          coordinates: coordinates,
          title: title,
        })
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nova Denúncia</Text>
            <Image
                // source={require('../../assets/agua-parada.jpeg')} // Coloque o caminho para a imagem desejada
                source={{uri: `data:image/jpeg;base64,${image}`}}
                style={styles.image}
            />
            <TextInput
                placeholder="Digite o título da denúncia"
                onChangeText={text => setTitle(text)}
                value={title}
                style={styles.titleInput}
            />
            <TextInput
                placeholder="Digite a descrição da imagem"
                onChangeText={text => setDescription(text)}
                value={description}
                style={styles.descInput}
                multiline={true} // Permite que o campo de texto tenha várias linhas
            />
            <Button
                title="Enviar"
                onPress={handleSend}
                style={styles.button}
                color="#169C89" // Altere a cor do botão conforme necessário
            />
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
    titleInput: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius: 8, // Suaviza as bordas da caixa de texto
    },
    descInput: {
      width: '100%',
      height: 120, // Ajuste o tamanho da caixa de texto conforme necessário
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius: 8, // Suaviza as bordas da caixa de texto
      textAlignVertical: 'top', // Alinha o texto ao topo da caixa de texto
      textAlign: 'justify', // Alinha o texto ao centro da caixa de texto
    },
  });

export default NewReport;