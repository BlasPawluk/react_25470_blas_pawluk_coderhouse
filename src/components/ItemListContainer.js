import React from 'react';
import './NavBar.css';

export const ItemListContainer = ({datos}) => {
  const {nombre, apellido, saludo} = datos
  console.log(datos);
  return (
    <div>
      Hola soy {nombre} {apellido};<p>{saludo}</p>
    </div>
  );
};
