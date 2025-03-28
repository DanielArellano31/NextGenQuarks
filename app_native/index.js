import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import { RegisterUser } from './register';
import { AuthorizationPanel } from './DasboardAdmin';
import Layout from './Layout';

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={App}  />
            <Stack.Screen name="Register" component={RegisterUser}  />
            <Stack.Screen name="DasboardAdmin" component={AuthorizationPanel}  />
            <Stack.Screen name="layout" component={Layout}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
