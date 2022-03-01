import React from 'react';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='divPadre'>
        <h1>KYBER</h1>
        <div className='links'>
          <a href='#'>Nosotros</a>
          <a href='#'>Products</a>
        </div>
      </div>
    </nav>
  );
};
