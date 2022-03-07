import React from 'react';
import './Estilos.css';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='divPadre'>
        <h1>KYBER MOVIES</h1>
        <div className='links'>
          <a href='#'>Nosotros</a>
          <a href='#'>Movies</a>
          <a href='#'>
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </nav>
  );
};
