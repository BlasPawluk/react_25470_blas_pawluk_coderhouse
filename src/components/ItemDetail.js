import React from 'react';
import './Estilos.css';
import { ItemCount } from './ItemCount';
export const ItemDetail = ({ product }) => {
  const { title, price, stock, image } = product;
  return (
    <div className='declararTexto'>
      <img src={image} width='200px' height='200px' alt='' />
      <h1>Nombre: {title}</h1>
      <h6>Precio: ${price}</h6>
      <h7>Tenemos: {stock}</h7>
      <ItemCount stock={stock} inicial={1} />
    </div>
  );
};
export default ItemDetail;
