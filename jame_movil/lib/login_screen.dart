import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueAccent, // Fondo exterior
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Marco del dispositivo móvil
            Container(
            width: 350, // Ancho del marco
            height: 800, // Alto del marco
            decoration: BoxDecoration(
            color: Colors.black, // Color del marco
            borderRadius: BorderRadius.circular(40), // Bordes redondeados para simular el celular
            border: Border.all(
            color: const Color.fromARGB(255, 156, 154, 154), // Color del borde
            width: 3, // Grosor del borde para acentuar el efecto de marco
            ),
            boxShadow: [
            BoxShadow(
            color: Colors.black.withOpacity(0.5), // Sombra para dar profundidad
            blurRadius: 10, // Desenfoque de la sombra
            offset: Offset(0, 5), // Posición de la sombra
            ),
          ],
          ),
          ), 
            // Fondo azul claro dentro del marco
            Positioned(
              left: 20,
              right: 20,
              top: 50,
              bottom: 50,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(15), // Bordes redondeados internos
                child: Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage('assets/background2.png'), // Fondo decorativo
                      fit: BoxFit.cover, // Ajusta el fondo al tamaño del contenedor
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0), // Margen interno del contenido
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center, // Centra el contenido verticalmente
                      crossAxisAlignment: CrossAxisAlignment.center, // Centra el contenido horizontalmente
                      children: [
                        // Imagen del bulldog francés
                        Image.asset(
                          'assets/background3.png', // Ruta de la imagen del bulldog
                          width: 290,
                          height: 250,
                          fit: BoxFit.contain,
                        ),
                        const SizedBox(height: 0), // Espacio entre el bulldog y la tarjeta
                        // Tarjeta con campos
                        Card(
                          elevation: 6, // Sombra para efecto 3D
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(20), // Bordes redondeados
                          ),
                          color: const Color.fromARGB(255, 215, 213, 213), 
                          child: Padding(
                            padding: const EdgeInsets.all(12.0), // Ajusta el espacio interno
                            child: Column(
                              mainAxisSize: MainAxisSize.min, // Ajuste dinámico del tamaño
                              children: [
                                _buildTextField('Usuario'),
                                const SizedBox(height: 20),
                                _buildTextField('Contraseña*', obscureText: true), 
                                const SizedBox(height: 30),
                               SizedBox(
                                width: 250, // Ajusta el ancho del botón
                                child: ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                backgroundColor: Colors.green,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(vertical: 12),
                                ),
                                onPressed: () {
                                print('Iniciar sesión presionado');
                                },
                                child: const Text('Ingresar'),
                                ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 15), // Espacio entre la tarjeta y el enlace
                        // Enlace "¿Olvidaste tu contraseña?" fuera de la tarjeta
                        GestureDetector(
                          onTap: () {
                            print('Recuperar contraseña presionado');
                          },
                          child: const Text(
                            '¿Olvidaste tu contraseña?',
                            textAlign: TextAlign.left,
                            style: TextStyle(
                              color: Colors.blue, // Texto azul
                              fontSize: 12,
                              decoration: TextDecoration.underline, // Subrayado
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // Widget helper para los campos de texto
  Widget _buildTextField(String label, {bool obscureText = false}) {
    return TextField(
      obscureText: obscureText,
      style: const TextStyle(
        fontSize: 12, // Tamaño reducido del texto dentro del campo
        color: Colors.black,
      ),
      decoration: InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(
          color: Colors.black,
          fontSize: 12, // Tamaño de la etiqueta
        ),
        enabledBorder: const UnderlineInputBorder(
          borderSide: BorderSide(color: Colors.black, width: 1), // Línea negra delgada
        ),
        focusedBorder: const UnderlineInputBorder(
          borderSide: BorderSide(color: Colors.blueAccent, width: 2), // Línea azul
        ),
      ),
    );
  }
}