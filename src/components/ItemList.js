import React from 'react'
import Item from './Item.js'
import './Estilos.css'

export const ItemList = ({productos =[]}) => {
  return (
    <div className='declarar'>
      <p>
    {productos.map((productos) => ((<Item key={productos.id} productos={productos}/>)))}
      </p>
    </div>
  )
}
export default ItemList
