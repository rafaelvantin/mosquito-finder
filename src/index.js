import { NavigationContainer } from '@react-navigation/native';

import { UserStorage } from './store/userContext.js';
import { ReportStorage } from './store/reportContext.js';

import Routes from './routes/index.js';

import './config/StatusBar';

const App = () => {
    return (
        <NavigationContainer>
            <UserStorage>
                <ReportStorage>
                    <Routes />
                </ReportStorage>
            </UserStorage>
        </NavigationContainer>
    );
}

export default App;