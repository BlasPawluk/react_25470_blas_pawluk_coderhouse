import React from 'react'
import Item from './Item.js'
import './Estilos.css'

export const ItemList = ({productos =[]}) => {
  return (
    <div className='declarar'>
    {productos.map((elemen) => {
      return ((<Item key={elemen.id} producto={elemen} nombre={'hola'}/>))})}
    </div>
  )
}
export default ItemList
