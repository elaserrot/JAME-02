import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      nombre: 'Medicina General',
      descripcion: 'Consulta de medicina veterinaria general para caninos y felinos menores de 7 años.',
      icono: require('../assets/perroa.png'),
    },
    {
      id: 2,
      nombre: 'Consulta Nutricional',
      descripcion: 'Recomendaciones sobre comidas balanceadas respecto a sus nutrientes ajusta para los perros y gatos.',
      icono: require('../assets/perroa.png'), 
    },
    {
      id: 3,
      nombre: 'Vacunación',
      descripcion: 'Guías para la vacunación de perros (caninos) y gatos (felinos).',
      icono: require('../assets/perroa.png'), 
    },
    {
      id: 4,
      nombre: 'Cardiología',
      descripcion: 'Consulta especializada de cardiología veterinaria para seguimiento y control del paciente.',
      icono: require('../assets/perroa.png'), 
    },
     {
      id: 5,
      nombre: 'Esterilización',
      descripcion: 'Ofrecemos servicios de esterilización y castración para perros y gatos.',
      icono: require('../assets/perroa.png'), 
    },
  ];

  return (
    <ImageBackground 
      source={require('../assets/fondol.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nuestros Servicios</Text>
          <Text style={styles.headerSubtitle}>Ofrecemos todo tipo de atención en Ciudad Canina.</Text>
        </View>

        {/* Listado de servicios */}
        <View style={styles.serviciosGrid}>
          {servicios.map((servicio) => (
            <TouchableOpacity key={servicio.id} style={styles.servicioCard}>
              <View style={styles.iconContainer}>
                <Image source={servicio.icono} style={styles.icon} />
              </View>
              <Text style={styles.servicioNombre}>{servicio.nombre}</Text>
              <Text style={styles.servicioDesc}>{servicio.descripcion}</Text>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.botonTexto}>Agendar Cita</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

    
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fondo semi-transparente para mejor legibilidad
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semi-transparente para el header
    padding: 15,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  serviciosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  servicioCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  servicioNombre: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  servicioDesc: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: '500',
  },
  promocionesContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    borderRadius: 10,
  },
  promocionesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  promoCard: {
    backgroundColor: 'rgba(255, 248, 225, 0.9)',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  promoBadge: {
    backgroundColor: '#ff5722',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 8,
  },
  promoBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  promoText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Servicios;