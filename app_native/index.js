import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import { RegisterUser } from './register';
import { AuthorizationPanel } from './DasboardAdmin';
import { MechanicView } from './DashboardMechanic';
import { OperatorView } from './DashboardOperator';
import modelo from './modelo';
import Modelop from './modelo';
import { ReportForm } from './report';

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={App}  />
            <Stack.Screen name="Register" component={RegisterUser}  />
            <Stack.Screen name="DasboardAdmin" component={AuthorizationPanel}  />
            <Stack.Screen name="Mechanic" component={MechanicView}  />
            <Stack.Screen name="Operator" component={OperatorView}  />
            <Stack.Screen name="modelo" component={Modelop}  />
            <Stack.Screen name="report" component={ReportForm}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
