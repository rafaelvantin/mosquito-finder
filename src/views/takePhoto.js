import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const TakePhoto = () => {
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') {
                    alert('Desculpe, precisamos de permissão para acessar a câmera!');
                }
            }
        })();
    }, []);

    const takePhotoFromCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar a câmera!');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            convertImageToBase64(result.assets[0].uri);
        }
    };

    const choosePhotoFromLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar a galeria!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            convertImageToBase64(result.assets[0].uri);
        }
    };

    const convertImageToBase64 = async (imageUri) => {
        const base64Image = await FileSystem.readAsStringAsync(imageUri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        setBase64Image(base64Image);
    };

    return (
        <View style={styles.container}>
            <Button title="Tirar foto" onPress={takePhotoFromCamera} />
            <Button title="Escolher foto" onPress={choosePhotoFromLibrary} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            {/* {base64Image && (
                <Text style={styles.base64Text}>{base64Image}</Text>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginTop: 20,
    },
    base64Text: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default TakePhoto;
