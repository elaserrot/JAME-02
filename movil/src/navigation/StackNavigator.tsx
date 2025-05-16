import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import Citas from '../screens/Citas';
import Cuenta from '../screens/Cuenta';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"  // ← Esto define la pantalla inicial
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f8f9fa',  
        },
        headerTintColor: '#333',       
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}

      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false }}

      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        options={{ headerShown: false }}

      />
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }}

      />
      <Stack.Screen 
        name="Citas" 
        component={Citas} 
        options={{ headerShown: false }}

      />
      <Stack.Screen 
        name="Cuenta" 
        component={Cuenta} 
        options={{ headerShown: false }}
 
      />
    </Stack.Navigator>
  );
}

