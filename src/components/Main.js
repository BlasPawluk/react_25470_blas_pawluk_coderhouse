import React from 'react';
import './Estilos.css';
import { ItemListContainer } from './ItemListContainer';
import { ItemCount } from './ItemCount';

export const Main = () => {

    return ( <
        main >
        <
        div className = 'colorFondo' >
        <
        div >
        <
        h2 className = 'resaltar' > Bienvenido! < /h2> <
        /div> <
        /div> <
        ItemListContainer / >
        <
        ItemCount inicial = { 1 }
        stock = { 10 }
        /> <
        /main>
    );
};
export default Main;