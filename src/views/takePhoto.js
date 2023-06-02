import { View, Text, TouchableHighlight } from 'react-native';

const TakePhoto = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>TakePhoto</Text>

            <TouchableHighlight onPress={() => navigation.navigate('NewReport')}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

export default TakePhoto;