import React from 'react';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='divPadre'>
        <h1>Hola Mundo</h1>
        <div className='links'>
          <a href='#'>Home</a>
          <a href='#'>Products</a>
        </div>
      </div>
    </nav>
  );
};
