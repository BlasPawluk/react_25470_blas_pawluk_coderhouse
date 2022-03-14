import React from 'react';
import './Estilos.css';
import {useState,useEffect} from 'react'
import { ItemDetail } from './ItemDetail';

const productos = [
  {id: 1, title: "BMW", price: 100, stock: 10},

];


export function ItemDetailContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const promise = new Promise((res,rej)=> {
      setTimeout(() => {
        res(productos)
      }, 2000);
    });
    promise.then((res) =>{
      setProducts(res);
      setLoading(true);
    }).catch((err)=> console.log(err));
  });
  if(!loading) {
    return <h5>Please Wait...</h5>
  }else{
    return(      
      <div className='divPadre'>
  <ItemDetail productos={products} />
</div>
  )
  }
}

export default ItemDetailContainer