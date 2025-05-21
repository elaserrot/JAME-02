import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('citas');
  const [contact, setContact] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'citas':
        return (
          <Text style={styles.serviceText}>
            En la veterinaria Ciudad Canina, tenemos servicio de consulta médica con un médico veterinario con más de
            20 años de experiencia, incluyendo servicios de esterilización, vacunaciones, desparasitaciones y controles.
          </Text>
        );
      case 'urgencias':
        return (
          <Text style={styles.serviceText}>
            Contamos con un servicio de urgencias disponible 24/7 para atender cualquier situación médica que pueda
            afectar a tu mascota. Tu tranquilidad y la salud de tu compañero son nuestra prioridad.
          </Text>
        );
      case 'productos':
        return (
          <Text style={styles.serviceText}>
            Ofrecemos una amplia variedad de productos y servicios, 
            desde alimentos premium hasta accesorios y tratamientos especializados para el bienestar de tu mascota.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>La mejor opción para el cuidado de tu mascota</Text>
            </View>
      <View style={styles.carouselContainer}>
        <Swiper autoplay dotColor="#ccc" activeDotColor="#014d82">
          <View style={styles.slide}>
            <Image source={require('../assets/Banner1.png')} style={styles.bannerImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/Banner2.png')} style={styles.bannerImage} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/Banner3.png')} style={styles.bannerImage} />
          </View>
        </Swiper>
      </View>

      <View style={[styles.nContainer, styles.nSection]}>
        <Text style={styles.nTitle}>NOSOTROS</Text>
        <View style={styles.nButtonsContainer}>
          <Text style={styles.nText}>
            Nuestra clínica está conformada por profesionales altamente capacitados, 
            con amplia experiencia en atención veterinaria y un profundo amor por los animales.
            Cada uno de nuestros servicios ha sido cuidadosamente diseñado para brindar atención médica de alta calidad,
            considerando las necesidades individuales de cada uno de nuestros pacientes.
          </Text>
        </View>
      </View>

      <View style={[styles.sectionContainer, styles.servicesSection]}>
        <Text style={styles.sectionTitle}>SERVICIOS DISPONIBLES</Text>
        <View style={styles.serviceButtonsContainer}>
          <TouchableOpacity
            style={[styles.serviceButton, activeSection === 'citas' && styles.activeServiceButton]}
            onPress={() => setActiveSection('citas')}
          >
            <Text style={[styles.serviceButtonText, activeSection === 'citas' && styles.activeServiceButtonText]}>
              Citas médicas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.serviceButton, activeSection === 'urgencias' && styles.activeServiceButton]}
            onPress={() => setActiveSection('urgencias')}
          >
            <Text style={[styles.serviceButtonText, activeSection === 'urgencias' && styles.activeServiceButtonText]}>
              Servicio de urgencias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.serviceButton1, activeSection === 'productos' && styles.activeServiceButton]}
            onPress={() => setActiveSection('productos')}
          >
            <Text style={[styles.serviceButtonText, activeSection === 'productos' && styles.activeServiceButtonText]}>
              Productos y Servicios adicionales
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContentContainer}>
          {renderContent()}
          <Image
            source={{ uri: 'https://www.shutterstock.com/image-photo/happy-male-vet-doctor-uniform-260nw-2485692303.jpg' }}
            style={styles.serviceImage}
          />
        </View>
      </View>

      <View style={[styles.sectionContainer, styles.contactSection]}>
        <Text style={styles.sectionTitle}>CONTACTO</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactForm}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={contact.nombre}
              onChangeText={(text) => setContact({ ...contact, nombre: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={contact.email}
              onChangeText={(text) => setContact({ ...contact, email: text })}
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Mensaje"
              multiline
              numberOfLines={4}
              value={contact.mensaje}
              onChangeText={(text) => setContact({ ...contact, mensaje: text })}
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Enviar Correo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactInfo}>
            <Text style={styles.infoTitle}>INFORMACIÓN DE CONTACTO</Text>

            <TouchableOpacity
              style={styles.contactRow}
              onPress={() => Linking.openURL('tel:+57321234567')}
            >
              <FontAwesome name="phone" size={20} color="#4A90E2" style={styles.contactIcon} />
              <Text style={styles.infoText}>+57 321 234567</Text>
            </TouchableOpacity>

            <View style={styles.socialIcons}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/juan.uparela.3')}>
                <FontAwesome name="facebook" size={28} color="#3b5998" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+573115929738')}>
                <FontAwesome name="whatsapp" size={28} color="#25D366" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/jusbass07/?hl=es-la')}>
                <FontAwesome name="instagram" size={28} color="#E1306C" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
    subMenu: {
    backgroundColor: '#eaf4ff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  subText: {
    color: '#333',
    marginBottom: 8,
  },
  subButton: {
    backgroundColor: '#014d82',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  nText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
 
  carouselContainer: { 
    height: 250, 
    position: 'relative', 
  }, 
  wrapper: {},
   slide: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  bannerImage: { 
    width: '100%', 
    height: '100%', },

   infoContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: ' #FFFFFF',
  },
  infoTitle: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },

  sectionContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  nContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014d82',
    marginBottom: 15,
    textAlign: 'center',
  },
  nTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#014d82',
    marginBottom: 15,
    textAlign: 'center',
  },
  servicesSection: {
    backgroundColor: '#f8f9fa',
  },
  nSection: {
    backgroundColor: '#f8f9fa',
  },
  serviceButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  nButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  serviceButton: {
    flex: 1,
    padding: 3,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#3A7BD5',
  },
   serviceButton1: {
    flex: 1,
    padding: 3,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#3A7BD5',
  },
  activeServiceButton: {
    backgroundColor: '#014d82',
  },
  serviceButtonText: {
    color: '#ffffff',
  },
  activeServiceButtonText: {
    color: 'white',
  },
  serviceContentContainer: {
    flexDirection: 'column',
  },
  serviceText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  contactSection: {
    backgroundColor: '#f8f9fa',
  },
  contactContainer: {
    flexDirection: 'column',
  },
  contactForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#014d82',
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#014d82',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#014d82',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
   contactIcon: {
    marginRight: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
});

export default HomeScreen;