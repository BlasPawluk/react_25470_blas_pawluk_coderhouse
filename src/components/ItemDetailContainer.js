import React from 'react';
import './Estilos.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { productos } from './ItemListContainer';

export function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
    promise
      .then((res) => {
        setProduct(res.find((productos) => productos.id === +id));
        setLoading(true);
      })
      .catch((err) => console.log(err));
  });
  if (!loading) {
    return <h5>Please Wait...</h5>;
  } else {
    return (
      <div className='divPadre'>
        <ItemDetail product={product} />
      </div>
    );
  }
}

export default ItemDetailContainer;
