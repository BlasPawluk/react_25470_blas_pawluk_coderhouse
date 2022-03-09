import React from 'react';
import './Estilos.css';
import {useState,useEffect} from 'react'
import { ItemList } from './ItemList';

const productos = [
  {id: 1, title: "BMW", price: 100, stock: 10},
  {id: 2, title: "Mercedes Benz", price: 200, stock: 5},
  {id: 3, title: "Audi", price: 300, stock: 8},
  {id: 4, title: "Ford", price: 400, stock: 7},
  {id: 5, title: "Fiat", price: 500, stock: 9}
];


export function ItemListContainer() {
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
    return <h3>...Loading</h3>
  }else{
    return(      
      <div className='divPadre'>
  <ItemList productos={products} />
</div>
  )
  }
}

export default ItemListContainer