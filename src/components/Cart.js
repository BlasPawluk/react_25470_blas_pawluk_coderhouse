import { React, useContext } from 'react';
import { contexto } from './CartContexto';
import { AiFillDelete } from 'react-icons/ai';

export const Cart = () => {
  const { carrito } = useContext(contexto);

  return (
    <div className='resaltar1 divPadre'>
      <h2 className='resaltar'>Objetos seleccionados: {carrito.length}</h2>
      {carrito.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>
            {item.price} x {item.stock}
          </p>
          <p>Total : $ {item.price * item.stock} </p>
          <button className='resaltar2'>
            <AiFillDelete />
          </button>
        </div>
      ))}
    </div>
  );
};
