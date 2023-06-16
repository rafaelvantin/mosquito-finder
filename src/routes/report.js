import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../views/main.js';
import SelectLocation from '../views/selectLocation.js';
import TakePhoto from '../views/takePhoto.js';
import NewReport from '../views/newReport.js';

const Stack = createNativeStackNavigator();

const MainScreen = () => {    
    return (
        <Stack.Navigator initialRouteName="NewReport" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="SelectLocation" component={SelectLocation} />
            <Stack.Screen name="TakePhoto" component={TakePhoto} />
            <Stack.Screen name="NewReport" component={NewReport} />
        </Stack.Navigator>
    );
}

export default MainScreen;