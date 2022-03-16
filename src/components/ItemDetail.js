import React from 'react';
import './Estilos.css';
import { ItemCount } from './ItemCount';
export const ItemDetail = ({ product }) => {
  const { title, price, stock, image } = product;
  return (
    <div className='declararTexto flexCont'>
      <img src={image} width='200px' height='200px' alt='' />
      <div className='flexCont'>
        <h3>Nombre: {title}</h3>
        <h4>Tenemos: {stock}</h4>
        <h5>Precio: ${price}</h5>
      </div>

      <ItemCount stock={stock} inicial={1} />
    </div>
  );
};
export default ItemDetail;
