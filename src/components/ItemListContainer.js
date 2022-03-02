import React from 'react';
import './NavBar.css';

export const ItemListContainer = (props) => {
  const nombre = props.nombre;
  const apellido = props.apellido;
  const greetings = props.greetings;

  console.log(props);
  return (
    <div>
      Hola soy {nombre} {apellido};<p>{greetings}</p>
    </div>
  );
};
