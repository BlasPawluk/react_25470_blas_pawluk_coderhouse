import React from 'react';
import './Estilos.css';
import {useState,useEffect} from 'react'


const productos = [
  {id: 1, title: "BMW", precio: 100, stock: 10},
  {id: 2, title: "Mercedes Benz", precio: 200, stock: 5},
  {id: 3, title: "Audi", precio: 300, stock: 8},
  {id: 4, title: "Ford", precio: 400, stock: 7},
  {id: 5, title: "Fiat", precio: 500, stock: 9}];
  

export const ItemListContainer = () => {
  const [productos, setproductos] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const promise = new Promise((res,rej)=> {
      setTimeout(() => {
        res(productos)
      }, 3000);
    });
    promise.then((res) =>{
      setproductos(res);
      setLoading(true);
    }).catch((err)=> console.log(err));
  });
  if(!loading) {
    return <h4>...Loading</h4>
  }else{
<>{console.log(productos)}</>
  }
}

export default ItemListContainer