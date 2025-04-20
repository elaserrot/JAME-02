import 'package:flutter/material.dart';

class FramedApp extends StatelessWidget {
  const FramedApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.orangeAccent, // Fondo exterior fuera del marco
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Marco del celular
            Container(
            width: 350, 
            height: 800, 
            decoration: BoxDecoration(
            color: Colors.black, // Color del marco
            borderRadius: BorderRadius.circular(40), // Bordes redondeados para simular el celular
            border: Border.all(
            color: const Color.fromARGB(255, 156, 154, 154), // Color del borde
            width: 3, // Grosor del borde para dar el efecto de marco
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
            // Fondo azul claro dentro del marco del dispositivo
            Positioned(
              left: 20,
              right: 20,
              top: 50,
              bottom: 50,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(
                  15,
                ), // Bordes redondeados internos
                child: Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage('assets/background1.png'),
                      fit:
                          BoxFit
                              .cover, // Ajusta la imagen al tamaño del contenedor
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(
                      16.0,
                    ), // Margen para el contenido
                    child: Column(
                      mainAxisAlignment:
                          MainAxisAlignment.center, // Centra verticalmente
                      crossAxisAlignment:
                          CrossAxisAlignment.center, // Centra horizontalmente
                      children: [
                        // Títulos
                        Column(
                          children: const [
                            Text(
                              '¡BIENVENIDOS!',
                              style: TextStyle(
                                fontFamily: ('assets/fonts/'),
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                                color: Colors.white, 
                              ),
                            ),
                            SizedBox(height: 15),
                            Text(
                              'VETERINARIA CIUDAD CANINA',
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 45),
                        // Tarjeta con los campos centrados
                        Card(
                          elevation: 6, // Sombra para dar efecto 3D
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(
                              20,
                            ), // Bordes redondeados
                          ),
                          color: const Color.fromARGB(
                            255,
                            215,
                            213,
                            213,
                          ), // Color de la tarjeta
                          child: Padding(
                            padding: const EdgeInsets.all(5.0),
                            child: Column(
                              mainAxisSize:
                                  MainAxisSize
                                      .min, // Ajuste dinámico del tamaño
                              mainAxisAlignment:
                                  MainAxisAlignment
                                      .center, // Centra los campos verticalmente
                              crossAxisAlignment:
                                  CrossAxisAlignment
                                      .center, // Centra los campos horizontalmente
                              children: [
                                Text(
                                  'REGISTRATE',
                                  style: TextStyle(
                                    height: 2,
                                    fontSize: 15,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  ),
                                ),
                                const SizedBox(height: 1),
                                _buildTextField('Nombre completo'),
                                const SizedBox(height: 1),
                                _buildTextField('Correo Electrónico'),
                                const SizedBox(height: 1),
                                _buildTextField('Usuario'),
                                const SizedBox(height: 1),
                                _buildTextField(
                                  'Contraseña*',
                                  obscureText: true,
                                ),
                                const SizedBox(height: 1),
                                _buildTextField(
                                  'Confirmar contraseña*',
                                  obscureText: true,
                                ),
                                const SizedBox(height: 25),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 1),
                        // Boton centrado debajo de la tarjeta
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Colors.green, // fondo boton
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 20,
                                  vertical: 12,
                                ),
                              ),
                              onPressed: () {},
                              child: const Text('Registrarse'),
                            ),
                          ],
                        ),
                        const SizedBox(height: 1),
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
  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 2), // Espaciado externo del campo
    child: TextField(
      obscureText: obscureText,
      style: const TextStyle(
        fontSize: 9, 
        color: Colors.black, // Color del texto
      ),
      decoration: InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(
          color: Colors.black,
          fontSize: 11, 
        ),
        enabledBorder: const UnderlineInputBorder(
          borderSide: BorderSide(color: Colors.black, width: 1), // Línea negra
        ),
        focusedBorder: const UnderlineInputBorder(
          borderSide: BorderSide(color: Colors.blueAccent, width: 3), // Línea azul al escribir
        ),
      ),
    ),
  );
}
}
