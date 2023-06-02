import { View, Text, TouchableHighlight } from 'react-native';

const SelectLocation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SelectLocation</Text>
            <TouchableHighlight onPress={() => navigation.navigate('TakePhoto')}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

export default SelectLocation;