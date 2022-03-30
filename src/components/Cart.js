import { React, useContext } from 'react';
import { contexto } from './CartContexto';
import { AiFillDelete } from 'react-icons/ai';

export const Cart = () => {
  const { clearCart } = useContext(contexto);
  const { carrito, removeItem } = useContext(contexto);

  return (
    <div className='resaltar1 divPadre'>
      <h2 className='resaltar'>Objetos seleccionados: {carrito.length}</h2>
      {carrito.map((item) => (
        <div className='resaltar2'>
          <button className='resaltar2' onClick={clearCart}>
            Limpiar Carrito
          </button>
          <div key={item.product.id}>
            <h3>{item.product.title}</h3>
            <p>
              {item.product.price} x {item.product.stock}
            </p>
            <p>
              Total : $ {item.product.price} x {item.product.stock}{' '}
            </p>
            <button
              onClick={() => removeItem(item.product.id)}
              className='resaltar2'
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
