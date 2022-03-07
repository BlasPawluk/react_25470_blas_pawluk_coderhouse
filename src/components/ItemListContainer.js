import React from 'react';
import './Estilos.css';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({datos}) => {
  const {nombre, apellido, saludo} = datos
  console.log(datos);
  return (
    <div>
      Hola soy {nombre} {apellido};<p>{saludo}</p>
      <ItemCount inicial={1} stock= {10}/>
    </div>
  );
};
