import React from 'react'
import Item from '../Item/item'

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map(item => (
        <div className="vivItemList" key={item.id}>
          <Item {...item} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
