import CartWidget from "./CartWidget"

const NavBar = ({ pagina, setPagina }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a
          className="navbar-brand"
          href="/"
          onClick={() => setPagina("inicio")}
        >
          Tienda Coder.ar
        </a>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <button
                className={`nav-link ${pagina === "inicio" ? "active-link" : ""}`}
                onClick={() => setPagina("inicio")}
              >
                Inicio
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${pagina === "productos" ? "active-link" : ""}`}
                onClick={() => setPagina("productos")}
              >
                Productos
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${pagina === "contacto" ? "active-link" : ""}`}
                onClick={() => setPagina("contacto")}
              >
                Contacto
              </button>
            </li>

          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
