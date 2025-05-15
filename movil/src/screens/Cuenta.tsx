import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const MiCuenta = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/usuarios/perfil/:id')
      .then((response) => {
        setUser(response.data.usuario);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login' as never);
  };

  const handleEditProfile = () => {
    navigation.navigate('Citas' as never);
  };

  if (loading) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  return (
    <ImageBackground
       source={require('../assets/fondol.png')}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Feather name="edit" size={18} color="#007bff" />
          <Text style={styles.editText}>Agenda tus citas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, { backgroundColor: '#dc3545' }]}
          onPress={handleLogout}
        >
          <Feather name="log-out" size={18} color="#fff" style={styles.menuIcon} />
          <Text style={[styles.menuButtonText, { color: 'white' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundContainer: {
    flex: 1,
    width: '100%',
    },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#007bff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImageStyle: {
    opacity: 0.7, // Ajusta la opacidad según tus necesidades
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    paddingHorizontal: 20,
    paddingTop: 40,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  avatarImage: {
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#e9ecef',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  editText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#e9ecef',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuIcon: {
    marginRight: 6,
  },
});

export default MiCuenta;
