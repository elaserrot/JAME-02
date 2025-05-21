import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Modal,
  FlatList,
  Platform,
  Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-datepicker';
import { Feather } from '@expo/vector-icons';
import 'react-datepicker/dist/react-datepicker.css';

// Componente para selección de fecha (compatible con web y móvil)
const DateSelector = ({ date, onChange }) => {
  const [showNativePicker, setShowNativePicker] = useState(false);

  if (Platform.OS === 'web') {
    return (
      <div style={styles.webDatePicker}>
        <DatePicker
          selected={date}
          onChange={onChange}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          showPopperArrow={false}
          customInput={
            <div style={styles.webDateInput}>
              <span>{date.toLocaleDateString('es-ES')}</span>
              <Feather name="calendar" size={20} color="#666" />
            </div>
          }
        />
      </div>
    );
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.fieldValueContainer}
        onPress={() => setShowNativePicker(true)}
      >
        <Text style={styles.fieldValue}>
          {date.toLocaleDateString('es-ES')}
        </Text>
        <Feather name="calendar" size={20} color="#666" />
      </TouchableOpacity>
      
      {showNativePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowNativePicker(false);
            if (selectedDate) onChange(selectedDate);
          }}
          minimumDate={new Date()}
        />
      )}
    </>
  );
};

// Componente para selección de hora
const TimeSelector = ({ time, onChange, availableTimes }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TouchableOpacity 
        style={styles.fieldValueContainer}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.fieldValue}>{time}</Text>
        <Feather name="clock" size={20} color="#666" />
      </TouchableOpacity>
      
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccione la hora</Text>
            <FlatList
              data={availableTimes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={[
                    styles.modalItem,
                    time === item && styles.selectedTime
                  ]}
                  onPress={() => {
                    onChange(item);
                    setShowModal(false);
                  }}
                >
                  <Text>{item}</Text>
                  {time === item && (
                    <Feather name="check" size={20} color="#014d82" />
                  )}
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const Citas = ({ navigation }) => {
  // Estados para los datos del formulario
  const [servicio, setServicio] = useState('Vacunación');
  const [mascota, setMascota] = useState('Seleccione la mascota');
  const [fecha, setFecha] = useState(new Date());
  const [hora, setHora] = useState('09:00 AM');
  const [showMascotaModal, setShowMascotaModal] = useState(false);
  const [showServicioModal, setShowServicioModal] = useState(false);

  // Datos de ejemplo
  const mascotas = [
    { id: 1, nombre: 'Lola' },
    { id: 2, nombre: 'Max' },
    { id: 3, nombre: 'Luna' }
  ];

  const servicios = [
    { id: 1, nombre: 'Vacunación' },
    { id: 2, nombre: 'Medicina General' },
    { id: 3, nombre: 'Esterilización' },
    { id: 4, nombre: 'Cardiologia' },
    { id: 5, nombre: 'Consulta nutricional' }
  ];

  const horasDisponibles = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const [citas, setCitas] = useState([
    {
      id: 1,
      servicio: 'Medicina General',
      mascota: 'Lola',
      fecha: '30/05/2025',
      hora: '09:57 AM'
    }
  ]);

  // Función para formatear la fecha
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Función para agendar una nueva cita
  const handleAgendarCita = () => {
    if (mascota === 'Seleccione la mascota') {
      Alert.alert('Error', 'Por favor seleccione una mascota');
      return;
    }

    const nuevaCita = {
      id: citas.length + 1,
      servicio,
      mascota,
      fecha: formatDate(fecha),
      hora
    };

    setCitas([...citas, nuevaCita]);
    Alert.alert('Éxito', 'Cita agendada correctamente');
    
    // Resetear el formulario
    setServicio('Seleccione el servicio');
    setMascota('Seleccione la mascota');
    setFecha(new Date());
    setHora('00:00 AM/PM');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Agenda */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Agenda de Medicina</Text>
        
        {/* Campo de Servicio */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Servicio:</Text>
          <TouchableOpacity 
            style={styles.fieldValueContainer}
            onPress={() => setShowServicioModal(true)}
          >
            <Text style={styles.fieldValue}>{servicio}</Text>
            <Feather name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Campo de Mascota */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Mascota:</Text>
          <TouchableOpacity 
            style={styles.fieldValueContainer}
            onPress={() => setShowMascotaModal(true)}
          >
            <Text style={styles.fieldValue}>{mascota}</Text>
            <Feather name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Campo de Fecha */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Fecha:</Text>
          <DateSelector 
            date={fecha} 
            onChange={setFecha} 
          />
        </View>

        {/* Campo de Hora */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Hora:</Text>
          <TimeSelector 
            time={hora} 
            onChange={setHora}
            availableTimes={horasDisponibles}
          />
        </View>

        <TouchableOpacity 
          style={styles.agendarButton}
          onPress={handleAgendarCita}
        >
          <Text style={styles.agendarButtonText}>AGENDAR CITA</Text>
        </TouchableOpacity>
      </View>

      {/* Separador */}
      <View style={styles.divider} />

      {/* Listado de Citas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Citas Agendadas</Text>
        
        {/* Encabezado de la tabla */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { flex: 2 }]}>Servicio</Text>
          <Text style={styles.tableHeaderText}>Mascota</Text>
          <Text style={styles.tableHeaderText}>Fecha</Text>
          <Text style={styles.tableHeaderText}>Hora</Text>
        </View>

        {/* Filas de la tabla */}
        {citas.map((cita) => (
          <View key={cita.id} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2 }]}>{cita.servicio}</Text>
            <Text style={styles.tableCell}>{cita.mascota}</Text>
            <Text style={styles.tableCell}>{cita.fecha}</Text>
            <Text style={styles.tableCell}>{cita.hora}</Text>
          </View>
        ))}
      </View>

      {/* Modal para seleccionar mascota */}
      <Modal
        visible={showMascotaModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccione la mascota</Text>
            <FlatList
              data={mascotas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem}
                  onPress={() => {
                    setMascota(item.nombre);
                    setShowMascotaModal(false);
                  }}
                >
                  <Text>{item.nombre}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => setShowMascotaModal(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para seleccionar servicio */}
      <Modal
        visible={showServicioModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccione el servicio</Text>
            <FlatList
              data={servicios}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem}
                  onPress={() => {
                    setServicio(item.nombre);
                    setShowServicioModal(false);
                  }}
                >
                  <Text>{item.nombre}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={styles.modalCloseButton}
              onPress={() => setShowServicioModal(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  fieldValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  fieldValue: {
    fontSize: 16,
    color: '#666',
  },
  agendarButton: {
    backgroundColor: '#28A745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  agendarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
    marginBottom: 8,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  tableCell: {
    flex: 1,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedTime: {
    backgroundColor: '#f0f7ff',
  },
  modalCloseButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#014d82',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  webDatePicker: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  webDateInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
    padding: 8,
  },
});

export default Citas;