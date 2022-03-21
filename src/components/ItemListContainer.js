import React from 'react';
import './Estilos.css';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const productos = [
  {
    id: 1,
    title: 'BMW',
    price: 100,
    stock: 10,
    image: 'https://www.diariomotor.com/imagenes/2016/03/bmw-m3-e46-gtr-p.jpg',
  },
  {
    id: 2,
    title: 'Mercedes-Benz',
    price: 200,
    stock: 5,
    image: 'https://zeperfs.com/photos/3861-f.jpg',
  },
  {
    id: 3,
    title: 'Audi',
    price: 300,
    stock: 8,
    image:
      'https://img.remediosdigitales.com/a6acd6/audi-r8-panther-edition-rwd-2021-15/840_560.jpg',
  },
];

export function ItemListContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 8000);
    });
    promise
      .then((res) => {
        if (category === undefined) {
          setProducts(productos);
        } else {
          setProducts(res.filter((productos) => productos.title === category));
        }
        setLoading(true);
        console.log(category);
      })
      .catch((err) => console.log(err));
  }, [category]);
  if (!loading) {
    return <>{toast.info('Cargando...')}</>;
  } else {
    return (
      <div className='divPadre'>
        <ItemList productos={products} />
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default ItemListContainer;
