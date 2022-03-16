import React from 'react';
import './Estilos.css';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

export const Main = () => {
  return (
    <main>
      <div className='colorFondo'>
        <h2 className='resaltar'> Bienvenido! </h2>
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/:category' element={<ItemListContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
    </main>
  );
};
export default Main;
