import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [form, setForm] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    usuario: '',
    contrasena: '',
    verificarContrasena: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleNavigateToLogin = () => {
    navigation.navigate('Login' as never);
  };

  const handleChange = (name: keyof typeof form, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validateFields = () => {
    const { nombreCompleto, correoElectronico, usuario, contrasena, verificarContrasena } = form;

    if (!nombreCompleto || !correoElectronico || !usuario || !contrasena || !verificarContrasena) {
      window.alert('Debes completar todos los campos.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correoElectronico)) {
     alert('El correo electrónico no es válido.');
      return false;
    }

    if (contrasena.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return false;
    }

    if (contrasena !== verificarContrasena) {
      alert('Las contraseñas no coinciden.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/usuarios/agregar', form, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 10000,
      });

      if (response.status === 200) {
       alert('¡Bienvenido a la familia! Ahora inicia sesión y empieza a disfrutar.');
        navigation.navigate('Login');
      }
    } catch (error) {
      alert('Hubo un problema con el servidor.');
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/fondol.png')}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Text style={styles.title}>Clinica Veterinaria Ciudad Canina</Text>
          <Text style={styles.subtitle}>Regístrate para acceder a nuestros servicios.</Text>

          <TextInput
            placeholder="Nombre completo"
            style={styles.input}
            value={form.nombreCompleto}
            onChangeText={(text) => handleChange('nombreCompleto', text)}
          />
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.correoElectronico}
            onChangeText={(text) => handleChange('correoElectronico', text)}
          />
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            autoCapitalize="none"
            value={form.usuario}
            onChangeText={(text) => handleChange('usuario', text)}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Contraseña"
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              value={form.contrasena}
              onChangeText={(text) => handleChange('contrasena', text)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
              <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#6c757d" />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirmar contraseña"
              style={styles.passwordInput}
              secureTextEntry={!showPassword2}
              value={form.verificarContrasena}
              onChangeText={(text) => handleChange('verificarContrasena', text)}
            />
            <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)} style={styles.eyeButton}>
              <Ionicons name={showPassword2 ? 'eye-outline' : 'eye-off-outline'} size={22} color="#6c757d" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.registerButton, loading && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.normalText}>¿Ya estas registrado? </Text>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text style={styles.linkText}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <Ionicons name="paw" size={50} color="#fff" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
  },
  normalText: {
    color: '#333',
    fontSize: 15,
  },
  linkText: {
    color: '#007bff',
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 20,
    padding: 25,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#007bff',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#6c757d',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeButton: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  registerButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Register;
