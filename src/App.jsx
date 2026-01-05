import { useState } from "react"
import NavBar from "./components/NavBar"
import Inicio from "./components/Inicio"
import Productos from "./components/Productos"
import Contacto from "./components/Contacto"

function App() {
  const [pagina, setPagina] = useState("inicio")

  const renderPagina = () => {
    if (pagina === "inicio") return <Inicio />
    if (pagina === "productos") return <Productos />
    if (pagina === "contacto") return <Contacto />
  }

  return (
    <>
      <NavBar pagina={pagina} setPagina={setPagina} />
      {renderPagina()}
    </>
  )
}

export default App
