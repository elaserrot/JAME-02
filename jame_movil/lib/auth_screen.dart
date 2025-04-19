import 'package:flutter/material.dart';
import 'register_screen.dart'; // Importa la pantalla de registro
import 'login_screen.dart'; // Importa la pantalla de login
import 'home_screen.dart'; // Importa la pantalla de inicio

class AuthScreen extends StatelessWidget {
  const AuthScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3, // Tres pestañas: Registro, Login y Home
      child: Scaffold(
        backgroundColor: Colors.white,
       appBar: AppBar(
      backgroundColor: Colors.black, // Fondo del AppBar
      title: const Text(
      'Veterinaria Ciudad Canina',
        style: TextStyle(
        color: Colors.blueAccent, // Color del texto del título
        fontSize: 30, // Tamaño de fuente
        fontWeight: FontWeight.bold, // Negrilla en el texto
    ),
    
  ),
      bottom: const TabBar(
      indicatorColor: Colors.blueAccent, // Indicador activo (línea)
      labelColor: Color.fromARGB(255, 6, 119, 233), // Color del texto activo
      unselectedLabelColor: Colors.white, // Color del texto inactivo
      
      tabs: [
      Tab(text: 'Registro'), // Pestaña de Registro
      Tab(text: 'Login'), // Pestaña de Login
      Tab(text: 'Home') // Pestaña de Inicio
    ],
  ),
),

        body: const TabBarView(
          children: [
            FramedApp(), // Contenido de la pestaña de Registro
            LoginScreen(), // Contenido de la pestaña de Login
            HomeScreen() // Contenido de la pestaña de Inicio
          ],
        ),
      ),
    );
  }
}