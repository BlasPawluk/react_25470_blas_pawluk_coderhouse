import React from 'react';
import './Estilos.css';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';

import { ItemCount } from './ItemCount';

export const Main = () => {

    return ( 
    <main >
        <div className = 'colorFondo' >
        <div>
        <h2 className = 'resaltar'> Bienvenido! </h2>
        </div> 
        <ItemListContainer />
        <ItemDetailContainer/>
        <ItemCount inicial = { 1 }stock = { 10 }/> 
        </div> 
        </main>
    )};
export default Main