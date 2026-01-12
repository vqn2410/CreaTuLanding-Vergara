// Importo el componente del carrito
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

// Componente NavBar
const NavBar = () => {
  return (
    // Barra de navegación usando clases de Bootstrap
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Logo o nombre de la tienda */}
        <Link className="navbar-brand" to="/">Mi Tienda Coder.ar</Link>

        {/* Botón que aparece en pantallas chicas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido que se colapsa en mobile */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Lista de links de navegación */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          {/* Renderizo el carrito de compras */}
          <CartWidget />

        </div>
      </div>
    </nav>
  )
}

// Exporto el componente para poder usarlo en App.jsx
export default NavBar
