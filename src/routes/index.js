import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/login.js';
import SignUp from '../views/signup.js';
import Drawer from './drawer.js';

import { UserContext } from '../store/userContext.js';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    const { user } = useContext(UserContext);
    
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={user ? Drawer : Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default HomeScreen;