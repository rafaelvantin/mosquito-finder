import { NavigationContainer } from '@react-navigation/native';

import { UserStorage } from './store/userContext.js';

import Routes from './routes/index.js';

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

export default App;