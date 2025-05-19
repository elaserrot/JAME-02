import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// Definimos el tipo para los nombres de iconos válidos
type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  icono: FeatherIconName;
  color: string;
}

const Servicios = () => {
  const navigation = useNavigation();

  const servicios: Servicio[] = [
    {
      id: 1,
      nombre: 'Medicina General',
      descripcion: 'Consulta de medicina veterinaria general para caninos y felinos menores de 7 años.',
      icono: 'activity',
      color: '#00bfff'
    },
    {
      id: 2,
      nombre: 'Consulta Nutricional',
      descripcion: 'Recomendaciones sobre comidas balanceadas respecto a sus nutrientes ajusta para los perros y gatos.',
      icono: 'package',
      color: '#007BFF'
    },
    {
      id: 3,
      nombre: 'Vacunación',
      descripcion: 'Guías para la vacunación de perros (caninos) y gatos (felinos).',
      icono: 'shield',
      color: '#007BFF'
    },
    {
      id: 4,
      nombre: 'Cardiología',
      descripcion: 'Consulta especializada de cardiología veterinaria para seguimiento y control del paciente.',
      icono: 'heart',
      color: '#00bfff'
    },
    {
      id: 5,
      nombre: 'Esterilización',
      descripcion: 'Ofrecemos servicios de esterilización y castración para perros y gatos.',
      icono: 'scissors',
      color: '#00bfff'
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
            <View 
              key={servicio.id} 
              style={[
                styles.servicioCard, 
                { borderTopColor: servicio.color, borderTopWidth: 4 }
              ]}
            >
              <View style={[styles.iconContainer, { backgroundColor: `${servicio.color}20` }]}>
                <Feather 
                  name={servicio.icono}
                  size={28}
                  color={servicio.color}
                />
              </View>
              <Text style={styles.servicioNombre}>{servicio.nombre}</Text>
              <Text style={styles.servicioDesc}>{servicio.descripcion}</Text>
              <TouchableOpacity 
                style={[styles.boton, { backgroundColor: servicio.color }]}
                onPress={() => navigation.navigate('Citas' as never)}
              >
                <Text style={styles.botonTexto}>Agendar Cita</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
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
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default Servicios;