import { View, Text, TouchableHighlight } from 'react-native';

const NewReport = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>NewReport</Text>

            <TouchableHighlight onPress={() => navigation.navigate('Main')}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}

export default NewReport;