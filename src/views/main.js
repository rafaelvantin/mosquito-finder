import { View, Text, TouchableHighlight } from 'react-native';

const Main = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Main</Text>

            <TouchableHighlight onPress={() => navigation.navigate('SelectLocation')}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Main;