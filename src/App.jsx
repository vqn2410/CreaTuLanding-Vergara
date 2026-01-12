// Importo los componentes que voy a usar en la aplicación
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Inicio from "./components/Inicio"
import Productos from "./components/Productos"
import Contacto from "./components/Contacto"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Componente principal de la app
function App() {
  return (
    <BrowserRouter>
      {/* Renderizo la barra de navegación */}
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

// Exporto el componente App para poder usarlo en main.jsx
export default App
