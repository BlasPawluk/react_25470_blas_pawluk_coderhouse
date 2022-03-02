import React from 'react';
import './NavBar.css';
import c1 from '../images/c1.png';
import { ItemListContainer } from './ItemListContainer';

export const Main = (props) => {
  console.log(props);
  const saludo = 'Disfruten la estadia';
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
      <ItemListContainer nombre='Ary' apellido='Gutierrez' greetings={saludo} />
    </main>
  );
};
export default Main;
