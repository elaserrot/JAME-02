import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0; // Índice del botón seleccionado

  // Lista de productos de ejemplo
  final List<Map<String, String>> productos = [
    {"nombre": "Comida para perros", "imagen": "assets/product1.png"},
    {"nombre": "Collar personalizado", "imagen": "assets/product2.png"},
    {"nombre": "Juguete interactivo", "imagen": "assets/product3.png"},
    {"nombre": "Arena para gatos", "imagen": "assets/product4.png"},
    {"nombre": "Casita para mascotas", "imagen": "assets/product5.png"},
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index; // Actualiza el índice seleccionado
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black, // Fondo exterior fuera del marco
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Marco del celular
            Container(
              width: 350,
              height: 800,
              decoration: BoxDecoration(
                color: Colors.black,
                borderRadius: BorderRadius.circular(40),
                border: Border.all(
                  color: const Color.fromARGB(255, 156, 154, 154),
                  width: 3,
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.5),
                    blurRadius: 10,
                    offset: const Offset(0, 5),
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
                borderRadius: BorderRadius.circular(15),
                child: Container(
                  decoration: BoxDecoration(
                    image: const DecorationImage(
                      image: AssetImage('assets/background1.png'),
                      fit: BoxFit.cover,
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      const Padding(
                        padding: EdgeInsets.only(top: 20),
                        child: Text(
                          'VETERINARIA',
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(top: 2),
                        child: Text(
                          'CIUDAD CANINA',
                          style: TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                      ),
                      const SizedBox(height: 18),
                      Container(
                        width: 280,
                        height: 30,
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.8),
                          borderRadius: BorderRadius.circular(15),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withOpacity(0.2),
                              blurRadius: 5,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: 'Buscar producto...',
                            hintStyle: const TextStyle(color: Colors.black54),
                            prefixIcon: const Icon(Icons.search, color: Colors.black54),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(15),
                              borderSide: BorderSide.none,
                            ),
                            filled: true,
                            fillColor: Colors.white.withOpacity(0.8),
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),
                      // Lista de productos desplazable
                      Expanded(
                        child: ListView.builder(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          itemCount: productos.length,
                          itemBuilder: (context, index) {
                            return Card(
                              elevation: 4,
                              margin: const EdgeInsets.symmetric(vertical: 8),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              child: ListTile(
                                leading: Image.asset(
                                  productos[index]["imagen"]!,
                                  width: 50,
                                  height: 50,
                                  fit: BoxFit.cover,
                                ),
                                title: Text(
                                  productos[index]["nombre"]!,
                                  style: const TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  ),
                                ),
                                trailing: const Icon(
                                  Icons.arrow_forward_ios,
                                  color: Colors.black54,
                                  size: 18,
                                ),
                              ),
                            );
                          },
                        ),
                      ),
                      const SizedBox(height: 20),
                      Container(
                        height: 72,
                        width: 350,
                        decoration: BoxDecoration(
                          color: const Color.fromARGB(255, 5, 51, 88),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            GestureDetector(
                              onTap: () => _onItemTapped(0),
                              child: Icon(
                                Icons.home,
                                color: _selectedIndex == 0 ? Colors.black : Colors.blueAccent,
                                size: 28,
                              ),
                            ),
                            GestureDetector(
                              onTap: () => _onItemTapped(1),
                              child: Icon(
                                Icons.pets,
                                color: _selectedIndex == 1 ? Colors.black : Colors.blueAccent,
                                size: 28,
                              ),
                            ),
                            GestureDetector(
                              onTap: () => _onItemTapped(2),
                              child: Icon(
                                Icons.event,
                                color: _selectedIndex == 2 ? Colors.black : Colors.blueAccent,
                                size: 28,
                              ),
                            ),
                            GestureDetector(
                              onTap: () => _onItemTapped(3),
                              child: Icon(
                                Icons.person,
                                color: _selectedIndex == 3 ? Colors.black : Colors.blueAccent,
                                size: 28,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}