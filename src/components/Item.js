import React from 'react';
import './Estilos.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
export const Item = (props) => {
  const { id, title, price, stock } = props.producto;

  return (
    <div className='resaltar'>
      <h4>{title}</h4>
      <div>${price}</div>
      <div>Actualmente nos quedan: {stock}</div>

      <NavLink to={`/item/${id}`}>
        <button className='resaltar1'>Mas Info</button>
      </NavLink>
    </div>
  );
};

export default Item;
