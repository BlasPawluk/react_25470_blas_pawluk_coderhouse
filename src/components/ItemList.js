import React from 'react';
import Item from './Item.js';
import './Estilos.css';

export const ItemList = ({ productos = [] }) => {
  return (
    <div className='declararTexto'>
      {productos.map((elemen) => {
        return <Item key={elemen.id} producto={elemen} />;
      })}
    </div>
  );
};
export default ItemList;
