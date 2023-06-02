import { NavigationContainer } from '@react-navigation/native';

import { UserStorage } from './store/userContext.js';

import Routes from './routes/index.js';

// import { View, Text } from 'react-native';

import './config/StatusBar';

const App = () => {
    return (
        <NavigationContainer>
            <UserStorage>
                <Routes />
            </UserStorage>
        </NavigationContainer>
    );
}
// const App = () => {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Login</Text>            
//         </View>
//     );
// }

export default App;