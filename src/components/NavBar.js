import React from 'react';
import './Estilos.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='divPadre'>
        <Link to='/'>
          <h1>KYBER CARS</h1>
        </Link>
        <div className='links'>
          <Link to='/BMW'>BMW</Link>
          <Link to='/Audi'>Audi</Link>
          <Link to='/Mercedes-Benz'>Mercedes</Link>
          <Link to='/Cart'>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};
