import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const MiCuenta = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    nombre: '',
    usuario: '',
    email: '@gmail.com',
    telefono: '',
    direccion: ''
  });
  const [loading, setLoading] = useState(false);
  const [hasPets, setHasPets] = useState(false);

  const handleAddPet = () => {
    navigation.navigate('AgregarMascota' as never);
  };

  const handleEditProfile = () => {
    navigation.navigate('EditarPerfil' as never);
  };

  return (
    <ImageBackground
      source={require('../assets/fondol.png')}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        {/* Encabezado */}
        <Text style={styles.headerTitle}>Veterinaria Ciudad Canina</Text>
        
        {/* Sección de perfil */}
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Detalles del perfil</Text>
          
          {/* Foto de perfil */}
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../assets/perroa.png')} 
              style={styles.avatar}
            />
            <TouchableOpacity onPress={handleEditProfile}>
              <Text style={styles.editPhotoText}>Cambiar foto</Text>
            </TouchableOpacity>
          </View>
          
          {/* Mis mascotas */}
          <Text style={styles.subtitle}>Mis mascotas</Text>
          {!hasPets && (
            <>
              <Text style={styles.noPetsText}>No tienes mascotas registradas.</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleAddPet}>
                <Text style={styles.addButtonText}>Agregar mascota</Text>
              </TouchableOpacity>
            </>
          )}
          
          {/* Información del usuario */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Nombre</Text>
            <Text style={styles.infoValue}>{user.nombre}</Text>
            
            <Text style={styles.infoLabel}>Usuario</Text>
            <Text style={styles.infoValue}>{user.usuario}</Text>
            
            <Text style={styles.infoLabel}>Correo</Text>
            <Text style={styles.infoValue}>{user.email}</Text>
            
            <Text style={styles.infoLabel}>Teléfono</Text>
            <Text style={styles.infoValue}>{user.telefono || 'No registrado'}</Text>
            
            <Text style={styles.infoLabel}>Dirección</Text>
            <Text style={styles.infoValue}>{user.direccion || 'No registrado'}</Text>
          </View>
        </View>
        
        {/* Botones de acción */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Feather name="edit" size={18} color="#014d82" />
          <Text style={styles.editText}>Editar perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login' as never)}>
          <Feather name="log-out" size={18} color="white" />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#014d82',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014d82',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#014d82',
  },
  editPhotoText: {
    color: '#014d82',
    marginTop: 8,
    fontWeight: '600',
  },
  noPetsText: {
    color: '#6c757d',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#014d82',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  infoContainer: {
    marginTop: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#014d82',
    marginTop: 12,
  },
  infoValue: {
    color: '#333',
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ecef',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  editText: {
    color: '#014d82',
    fontWeight: '600',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default MiCuenta;