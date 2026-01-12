import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Inicio from "./components/Inicio"
import Contacto from "./components/Contacto"
import ItemListContainer from "./components/ItemCount/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer mensaje="Nuestros Productos" />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
