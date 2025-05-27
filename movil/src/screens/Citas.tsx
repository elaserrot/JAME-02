import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Pressable,
  Alert,
  Animated,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import API from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const Citas = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [servicio, setServicio] = useState('');
  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerMode, setPickerMode] = useState<PickerModeType>('date');
  const [tempDate, setTempDate] = useState(new Date());
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  type PickerModeType = 'date' | 'time' | 'datetime' | 'countdown';

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const formatDateForDB = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let hours = "" + d.getHours();
    let minutes = "" + d.getMinutes();
    let seconds = "" + d.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    if (fecha < new Date()) {
      Alert.alert('Error', 'La fecha no puede ser anterior o igual al dia actual');
      return;
    }
    

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString || dateString === '0000-00-00 00:00:00') return 'No especificada';

    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const formatTimeForDisplay = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'p. m.' : 'a. m.';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  };

  const validateFields = () => {
    if (!servicio || !mascota || !fecha) {
      Alert.alert("Todos los campos son obligatorios");
      return false;
    }
    return true;
  };

  const handleAgendarCita = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No se encontró token de autenticación");

      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.id;

      const form = {
        Usuario: userId,
        Fecha: formatDateForDB(fecha),
        Motivo: servicio,
        Estado: 'pendiente',
        Mascota: mascota,
      };

      const response = await API.post("/citas/agregarCita", form);

      if (response.status === 200) {
        Alert.alert('Cita agendada correctamente');
        setServicio('');
        setMascota('');
        setFecha(new Date());
        await fetchCitas();
      } else {
        throw new Error(response.data.message || 'Error al agendar la cita');
      }
    } catch (err) {
      Alert.alert(err.message || 'Ocurrió un error al agendar la cita');
    } finally {
      setLoading(false);
    }
  };

  const fetchCitas = async () => {
    try {
      setRefreshing(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No se encontró token");

      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.id;

      if (userId) {
        const response = await API.get(`/citas/listarCitas/${userId}`);
        if (response.data && Array.isArray(response.data)) {
          setCitas(response.data); // Comenta el filtro para verificar

        } else {
          setCitas([]);
        }
      }
    } catch (error) {
      console.error("Error al obtener citas:", error);
      Alert.alert("No se pudieron cargar las citas");
      setCitas([]);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchMascotas = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No se encontró token");

      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const userId = tokenData.id;

      const response = await API.get(`/mascota/cliente/${userId}`);
      if (response.data && Array.isArray(response.data)) {
        setMascotas(response.data);
      } else {
        setMascotas([]);
      }
    } catch (error) {
      console.error("Error al obtener mascotas:", error);
      Alert.alert("No se pudieron cargar las mascotas");
      setMascotas([]);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      if (pickerMode === 'date') {
        setTempDate(selectedDate);
        if (Platform.OS === 'android') {
          setPickerMode('time');
          setShowDatePicker(true);
        } else {
          setFecha(selectedDate);
        }
      } else {
        const finalDate = new Date(tempDate);
        finalDate.setHours(selectedDate.getHours());
        finalDate.setMinutes(selectedDate.getMinutes());
        setFecha(finalDate);
        setPickerMode('date');
      }
    }
  };

  const showPicker = () => {
    setTempDate(fecha);
    setPickerMode('date');
    setShowDatePicker(true);
  };

  useEffect(() => {
    const initializeData = async () => {
      await fetchMascotas();
      await fetchCitas();
    };
    initializeData();
  }, []);

  const renderCitaItem = ({ item }) => {
    if (!item || !item.ID_CITAS) return null;

    const mascotaNombre = mascotas.find(m => m.ID_Mascota === item.Mascota)?.Nombre_Mascota || 'Mascota no encontrada';

    return (
      <View style={styles.citaItem}>
        <View style={styles.citaHeader}>
          <MaterialIcons name="pets" size={24} color="#007aff" />
          <Text style={styles.citaMascota}>{mascotaNombre}</Text>
        </View>
        <View style={styles.citaDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="event" size={18} color="#666" />
            <Text style={styles.detailText}>
              {formatDateForDisplay(item.Fecha_Cita)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="medical-services" size={18} color="#666" />
            <Text style={styles.detailText}>{item.Motivo}</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={[styles.statusText, styles[item.Estado.toLowerCase()]]}>
              {item.Estado}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/foto6.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={citas}
          keyExtractor={(item, index) => item?.ID_CITAS?.toString() || index.toString()}
          renderItem={renderCitaItem}
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.noCitasText}>No hay citas agendadas.</Text>
            </View>
          }
          ListHeaderComponent={
            <View style={styles.formContainer}>
              <Text style={styles.sectionTitle}>Agendar Nueva Cita</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Servicio</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={servicio}
                    onValueChange={(itemValue) => setServicio(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Seleccione el servicio" value="" />
                    <Picker.Item label="Medicina General" value="Medicina general" />
                    <Picker.Item label="Consulta Nutricional" value="Consulta nutricional" />
                    <Picker.Item label="Vacunación" value="vacunacion" />
                    <Picker.Item label="Cardiología" value="Cardiologia" />
                    <Picker.Item label="Esterilización" value="Esterilizacion" />
                  </Picker>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Mascota</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={mascota}
                    onValueChange={(itemValue) => setMascota(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Seleccione una mascota" value="" />
                    {mascotas.map((mascotaItem) => (
                      <Picker.Item
                        key={mascotaItem.ID_Mascota}
                        label={mascotaItem.Nombre_Mascota}
                        value={mascotaItem.ID_Mascota}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Fecha y Hora</Text>
                <TouchableOpacity
                  style={styles.dateInput}
                  onPress={showPicker}
                >
                  <Text>
                    {formatDateForDisplay(formatDateForDB(fecha))} - {formatTimeForDisplay(fecha)}
                  </Text>
                  <MaterialIcons name="calendar-today" size={20} color="#0056B3" />
                </TouchableOpacity>

                {showDatePicker && (
                  <DateTimePicker
                    value={pickerMode === 'date' ? tempDate : fecha}
                    mode={pickerMode}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleDateChange}
                    minimumDate={new Date()}
                  />
                )}
              </View>

              <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={handleAgendarCita}
                disabled={loading}
              >
                <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>Agendar Cita</Text>
                  )}
                </Animated.View>
              </Pressable>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshing={refreshing}
          onRefresh={fetchCitas}
        />
      </SafeAreaView>
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
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 24,
    margin: 12,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 22,
    color: '#1f1f1f',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 2.5,
    borderColor: '#6C757D',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    marginBottom: 18,
  },
  picker: {
    height: 48,
    width: '100%',
  },
  dateInput: {
    borderWidth: 3.5,
    borderColor: '#0056B3',
    backgroundColor: '#f1f1f1',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  citaItem: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 12,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  citaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  citaMascota: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#222',
  },
  citaDetails: {
    marginTop: 8,
    paddingHorizontal: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  detailText: {
    marginLeft: 10,
    color: '#444',
    fontSize: 16,
  },
  statusRow: {
    marginTop: 12,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  statusText: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 50,
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  pendiente: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  completada: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  cancelada: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  noCitasText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: '#777',
    marginTop: 20,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Citas;