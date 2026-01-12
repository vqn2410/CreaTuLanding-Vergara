// Componente que recibe un mensaje por props
const ItemListContainer = ({ mensaje }) => {
  return (
    // Contenedor principal con clases de Bootstrap
    <div className="container mt-5 text-center">
      {/* Muestra el mensaje que llega desde App.jsx */}
      <h2>{mensaje}</h2>
    </div>
  )
}

// Exporta el componente para poder usarlo en App.jsx
export default ItemListContainer
