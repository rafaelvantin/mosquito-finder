import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ViewReports from '../views/viewReports.js';
import ReportDetails from '../views/reportDetails.js';

const Stack = createNativeStackNavigator();

const CheckReports = () => {    
    return (
        <Stack.Navigator initialRouteName="ViewReports" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ViewReports" component={ViewReports} />
            <Stack.Screen name="ReportDetails" component={ReportDetails} />
        </Stack.Navigator>
    );
}

export default CheckReports;