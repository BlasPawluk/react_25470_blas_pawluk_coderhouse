import React from 'react';
import './Estilos.css';
import { ToastContainer, toast } from 'react-toastify';
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
        <ToastContainer autoClose={5000} />
        <button onClick={toast.success('Cargado Exitosamente')}>
          Mas Info
        </button>
      </NavLink>
    </div>
  )[id];
};

export default Item;
