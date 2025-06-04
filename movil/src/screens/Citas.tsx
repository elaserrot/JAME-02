import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import API from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const Citas = () => {
  const [serviciosDisponibles] = useState([
    "Medicina general",
    "Consulta Nutricional",
    "Vacunacion",
    "Cardiología",
    "Esterilización",
  ]);

  const [servicio, setServicio] = useState('');
  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [citas, setCitas] = useState([]);
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const formatDateTime = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:00`;
  };

  const formatDisplayDateTime = (dateString) => {
    if (!dateString) return 'Fecha no definida';
    try {
      const date = new Date(dateString);
      return date.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Fecha inválida';
    }
  };

  const validateFields = () => {
    if (!servicio || !mascota || !fecha) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return false;
    }
    return true;
  };

  const loadCitas = async () => {
    try {
      setRefreshing(true);
      const token = await AsyncStorage.getItem("token");
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.id;

      if (userId) {
        const response = await API.get(`/citas/listarCitas/${userId}`);
        setCitas(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar las citas");
      setCitas([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const loadMascotas = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.id;

      if (userId) {
        const response = await API.get(`/mascota/cliente/${userId}`);
        setMascotas(Array.isArray(response.data) ? response.data : []);
        setId(userId);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar las mascotas");
      setMascotas([]);
    }
  };

  const handleAgendarCita = async () => {
    if (!validateFields()) return;

    try {
      const form = {
        Usuario: id,
        Fecha: formatDateTime(fecha),
        Motivo: servicio,
        Estado: 'pendiente',
        Mascota: mascota,
      };

      const response = await API.post("/citas/agregarCita", form);

      if (response.status === 200) {
        Alert.alert('Éxito', 'Cita agendada correctamente');
        setServicio('');
        setMascota('');
        setFecha(new Date());
        await loadCitas();
      } else {
        throw new Error(response.data.message || 'Error al agendar la cita');
      }
    } catch (err) {
      Alert.alert('Error', err.message || 'Error al agendar la cita');
    }
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setHours(fecha.getHours());
      newDate.setMinutes(fecha.getMinutes());
      setFecha(newDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const newDate = new Date(fecha);
      newDate.setHours(selectedTime.getHours());
      newDate.setMinutes(selectedTime.getMinutes());
      setFecha(newDate);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await loadMascotas();
      await loadCitas();
    };
    initializeData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/foto6.png')}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Agendar Nueva Cita</Text>

        <View style={styles.card}>
          <Picker
            style={styles.picker}
            selectedValue={servicio}
            onValueChange={(itemValue) => setServicio(itemValue)}
          >
            <Picker.Item label="Seleccione un servicio" value="" />
            {serviciosDisponibles.map((servicio, index) => (
              <Picker.Item key={index} label={servicio} value={servicio} />
            ))}
          </Picker>

          <Picker
            style={styles.picker}
            selectedValue={mascota}
            onValueChange={(itemValue) => setMascota(itemValue)}
          >
            <Picker.Item label="Seleccione una mascota" value="" />
            {mascotas.map((item) => (
              <Picker.Item
                key={item.ID_Mascota}
                label={item.Nombre_Mascota}
                value={item.ID_Mascota}
              />
            ))}
          </Picker>

          <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.buttonText}>Seleccionar Fecha</Text>
          </TouchableOpacity>
          <Text style={styles.dateTimeText}>Fecha: {fecha.toLocaleDateString('es-ES')}</Text>

          <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
            <Text style={styles.buttonText}>Seleccionar Hora</Text>
          </TouchableOpacity>
          <Text style={styles.dateTimeText}>
            Hora: {fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
          </Text>

          <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={handleAgendarCita}>
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={fecha}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={onChangeDate}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={fecha}
            mode="time"
            display="default"
            is24Hour={true}
            onChange={onChangeTime}
          />
        )}

        <Text style={styles.title}>Tus Citas Agendadas</Text>

        <FlatList
          data={citas}
          keyExtractor={(item) => item.ID_CITAS?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>🐶 Servicio: {item.Motivo_Cita}</Text>
              <Text style={styles.itemText}>🐾 Mascota: {item.Nombre_Mascota}</Text>
              <Text style={styles.itemText}>🕒 Fecha: {formatDisplayDateTime(item.Fecha_Cita)}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay citas agendadas</Text>}
          refreshing={refreshing}
          onRefresh={loadCitas}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#014d82',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  dateTimeText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  greenButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default Citas;
