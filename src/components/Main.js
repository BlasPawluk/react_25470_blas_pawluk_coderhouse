import React from 'react';
import './Estilos.css';
import { ItemListContainer } from './ItemListContainer';

export const Main = (props) => {
  
  const datos = {
    nombre: 'Blas',
    apellido:'Pawluk',
    edad: 22,
    saludo: 'Disfruten la estadia'
  }
  return (
    <main>
      <div className='colorFondo'>
        <div>
          <h2 className='resaltar'>
            Bienvenido {props.nombre} {props.apellido}!
          </h2>
          <p className='resaltar1'>Tengo {props.edad} años!</p>
          <p className='resaltar1'>Inspirado gracias a: {props.usuarios}</p>
          <div></div>
        </div>
      </div>
      <ItemListContainer datos={datos} />
    </main>
  );
};
export default Main;