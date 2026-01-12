const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="divItem">
      <img src={img} className="imgItem" alt={nombre} style={{ height: '200px', objectFit: 'contain' }} />
      <div className="divItemBody">
        <h3 className="h3Item">{nombre}</h3>
        <div>
          <p className="idItem">ID: {id}</p>
          <p className="precioItem">${precio}</p>
          <button className="btnItem">Ver detalle</button>
        </div>
      </div>
    </div>
  )
}

export default Item
