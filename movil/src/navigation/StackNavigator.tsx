import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import Citas from '../screens/Citas';
import Cuenta from '../screens/Cuenta';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function CustomHeader() {
  const navigation = useNavigation(); // Se requiere para navegar dentro del header

  return (
    <View>


      <View style={styles.infoContainer2}>
        <Image
          source={require('../assets/logovet.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.infoSubtitle}>Veterinaria Ciudad Canina</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Cuenta' as never)}>
          <Feather name="user" size={14} color="#7EB6FF" style={styles.profileIcon} />
          <Text style={styles.profileText}>PERFIL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Productos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Servicios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Contáctanos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Acerca de nosotros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function StackNavigator() {
  return (
    <Stack.Navigator
     id={undefined}
      initialRouteName="Login"
      screenOptions={{ 
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
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen 
        name="Citas" 
        component={Citas} 
        options={{ title: 'Citas' }} 
      />
      <Stack.Screen 
        name="Cuenta" 
        component={Cuenta} 
        options={{ title: 'Perfil' }} 
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#5D9CEC',
  },
 infoTitle: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
 infoContainer2: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between'
  },
 logo: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  infoSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
   profileIcon: {
    marginRight: 6,
  },
profileText: {
    color: '#014d82',
    fontWeight: 'bold',
    fontSize: 12,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#5D9CEC',
    paddingVertical: 10,
  },
menuItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  menuItem: {
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  menuText: {
    color: '#333',
    fontSize: 12,
  },
});
