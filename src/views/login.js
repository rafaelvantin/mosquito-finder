import { View, Text, TouchableHighlight } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login</Text>
            
            <TouchableHighlight onPress={() => navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Login;