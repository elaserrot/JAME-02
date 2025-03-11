import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Cliente/Index";
import InicioAdmin from "./pages/Admin/InicioAdmin";
import Login from "./pages/Cliente/Login";
import Register from "./pages/Cliente/Register";
import Example from "./pages/Cliente/Example"
import PerfilUsuario from "./pages/Cliente/PerfilUsuario";
import Productos from "./pages/Cliente/Productos";
import Producto from "./pages/Cliente/Producto"
import CarritoCompras from "./pages/Cliente/CarritoCompras";
import PasarelaPago from "./pages/Cliente/PasarelaPago"
import OlvidoContraseña from "./pages/Cliente/OlvidoContraseña";
import Mascota from "./pages/Cliente/Mascota";
import ServiciosMedicina from "./pages/Cliente/ServiciosMedicina";
import AgendamientoGrooming from "./pages/Cliente/AgendamientoGrooming";
{/* ----------------------paginas de administrador-------------------- */ }
import AdminPedidos from "./pages/Admin/AdminPedidos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/example" element={<Example />} />
        <Route path="/perfil" element={<PerfilUsuario/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/producto" element={<Producto/>}/>
        <Route path="/carrito" element={<CarritoCompras/>}/>
        <Route path="/pago" element={<PasarelaPago />} />
        <Route path="/recuperar" element={<OlvidoContraseña />} />
        <Route path="/mascota" element={<Mascota/>} />
        <Route path="/medicina" element={<ServiciosMedicina/>} />
        <Route path="/grooming" element={<AgendamientoGrooming/>} />
{/* ----------------------paginas de administrador-------------------- */}
        <Route path="/administrador/" element={<InicioAdmin />} />
        <Route path="/pedidos" element={<AdminPedidos />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
