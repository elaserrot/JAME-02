import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import Citas from '../screens/Citas';
import Cuenta from '../screens/Cuenta';
import Servicios from '../screens/Servicios';
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
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Productos' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="shopping-cart" size={20} color="#333" />
            <Text style={styles.menuText}>Productos</Text>
          </View>
          </TouchableOpacity>
         <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Servicios' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="clipboard" size={20} color="#333" />
            <Text style={styles.menuText}>Servicios</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
function CustomHeader1() {
  const navigation = useNavigation(); 

  return (
    <View>
      <View style={styles.menuContainer1}>
        <View style={styles.menuItems1}>
          <TouchableOpacity 
            style={styles.menuItem1}
            onPress={() => navigation.navigate('HomeScreen' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="home" size={20} color="#333" />
            <Text style={styles.menuText1}>Home</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem1}
            onPress={() => navigation.navigate('Productos' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="shopping-cart" size={20} color="#333" />
            <Text style={styles.menuText1}>Productos</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem1}
            onPress={() => navigation.navigate('Servicios' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="clipboard" size={20} color="#333" />
            <Text style={styles.menuText1}>Servicios</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
function CustomHeader2() {
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

      <View style={styles.menuContainer2}>
        <View style={styles.menuItems}>
          <TouchableOpacity 
            style={styles.menuItem2}
            onPress={() => navigation.navigate('HomeScreen' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="home" size={20} color="#333" />
            <Text style={styles.menuText2}>Home</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem2}
            onPress={() => navigation.navigate('Productos' as never)}>
            <View style={styles.menuItemContent}>
            <Feather name="shopping-cart" size={20} color="#333" />
            <Text style={styles.menuText2}>Productos</Text>
          </View>
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
      initialRouteName="HomeScreen"
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
        options={{ header: () => <CustomHeader1 /> }}
      />
      <Stack.Screen 
        name="Servicios" 
        component={Servicios} 
        options={{ header: () => <CustomHeader2 /> }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menuItemContent: {
  alignItems: 'center',
  justifyContent: 'center',
},
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
    backgroundColor: '87cefa',
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
    paddingVertical: 6,
  },
menuItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  menuItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  menuText: {
    color: '#333',
    fontSize: 13,
    opacity: 0.5
  },
  menuContainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
    paddingVertical: 6,
  },
menuItems1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  menuItem1: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  menuText1: {
    color: '#333',
    fontSize: 13,
    opacity: 0.5
  },
  menuContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#87cefa',
    paddingVertical: 6,
  },
menuItems2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
  },
  menuItem2: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  menuText2: {
    color: '#333',
    fontSize: 13,
    opacity: 0.5
  },
});
