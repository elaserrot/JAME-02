import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final List<Map<String, dynamic>> productos = [
    {"nombre": "Juguete Pollo Al Horno", "peso": "500 Gr", "precio": 12000, "imagen": "assets/Royal2.png"},
    {"nombre": "Hueso Carne de Res", "peso": "500 Gr", "precio": 12800, "imagen": "assets/Royal2.png"},
    {"nombre": "Galleta Pavo Al Horno", "peso": "500 Gr", "precio": 16250, "imagen": "assets/Royal2.png"},
    {"nombre": "Huesos de Carne", "peso": "30 Un", "precio": 180000, "imagen": "assets/Royal2.png"},
  ];

  Map<int, int> cantidades = {}; // Almacena la cantidad seleccionada por producto

  void _incrementarCantidad(int index) {
    setState(() {
      cantidades[index] = (cantidades[index] ?? 1) + 1;
    });
  }

  void _decrementarCantidad(int index) {
    setState(() {
      if (cantidades[index] != null && cantidades[index]! > 1) {
        cantidades[index] = cantidades[index]! - 1;
      }
    });
  }

  void _onComprar(int index) {
    final producto = productos[index];
    final cantidad = cantidades[index] ?? 1;
    final total = producto["precio"] * cantidad;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Has añadido al carrito $cantidad "${producto["nombre"]}" por \$${total}'),
        duration: const Duration(seconds: 4),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.orangeAccent,
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
            // Fondo dentro del marco
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
                      // Lista de productos con botón de comprar
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
                              child: Padding(
                                padding: const EdgeInsets.all(12),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    // Imagen del producto
                                    SizedBox(
                                      width: 60,
                                      height: 60,
                                      child: Image.asset(
                                        productos[index]["imagen"]!,
                                        fit: BoxFit.contain,
                                      ),
                                    ),
                                    const SizedBox(width: 15),
                                    // Detalles del producto
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            productos[index]["nombre"]!,
                                            style: const TextStyle(
                                              fontSize: 16,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.black,
                                            ),
                                          ),
                                          Text(
                                            productos[index]["peso"]!,
                                            style: const TextStyle(
                                              fontSize: 14,
                                              color: Colors.grey,
                                            ),
                                          ),
                                          Text(
                                            "\$${productos[index]["precio"]}",
                                            style: const TextStyle(
                                              fontSize: 16,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.green,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                    // Botones de cantidad y comprar
                                    Column(
                                      children: [
                                        Row(
                                          children: [
                                            IconButton(
                                              icon: const Icon(Icons.remove, color: Colors.red),
                                              onPressed: () => _decrementarCantidad(index),
                                            ),
                                            Text(
                                              cantidades[index]?.toString() ?? "1",
                                              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                                            ),
                                            IconButton(
                                              icon: const Icon(Icons.add, color: Colors.green),
                                              onPressed: () => _incrementarCantidad(index),
                                            ),
                                          ],
                                        ),
                                        ElevatedButton(
                                          onPressed: () => _onComprar(index),
                                          style: ElevatedButton.styleFrom(
                                            backgroundColor: Colors.blueAccent,
                                            shape: RoundedRectangleBorder(
                                              borderRadius: BorderRadius.circular(15),
                                            ),
                                          ),
                                          child: const Text(
                                            ' carrito',
                                            style: TextStyle(color: Colors.white),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            );
                          },
                        ),
                      ),
                      const SizedBox(height: 20),
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