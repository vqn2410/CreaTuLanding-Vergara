import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList"
import { getProductos } from "../../asyncmock"

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductos()
      .then(res => {
        setProductos(res)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mt-4">
      {mensaje && <h2 className="h2ItemListContainer">{mensaje}</h2>}

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2 text-muted">Buscando productos...</p>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  )
}

export default ItemListContainer
