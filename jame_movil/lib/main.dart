import 'package:flutter/material.dart';
import 'auth_screen.dart'; // Importa la nueva pantalla que contiene las vistas

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'jame movil', // Titulo de la pestaña en el browser
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 6, 31, 253)), // Color de fondo la vista activa
      ),
      home: const AuthScreen(), // Usa la pantalla de pestañas
    );
  }
}