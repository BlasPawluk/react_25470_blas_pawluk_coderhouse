import React from 'react';
import './Estilos.css';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { dbFireBase } from './Firebase';
import { getDocs, collection, where, query, getDoc } from 'firebase/firestore';

/*export const productos = [
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
*/

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const productosCollection = collection(dbFireBase, 'productos');
    const documentos = getDocs(productosCollection);
    documentos
      .then((respuesta) => {
        const aux = [];
        respuesta.forEach((documentos) => {
          const producto = {
            id: documentos.id,
            ...documentos.data(),
          };
          console.log(producto);
          aux.push(producto);
        });
        setProducts(aux);
      })
      .catch((err) => {
        toast.error('Hubo un error al cargar los productos');
      });
    if (idCategory) {
      const q = query(
        collection(dbFireBase, 'productos'),
        where('categoria', '==', idCategory)
      );
      getDocs(q)
        .then((resp) =>
          setProducts(resp.docs.map((p) => ({ productos: p.data(), id: p.id })))
        )
        .catch((err) => console.log(err));
      console.log(q);
    } else {
      getDocs(collection(dbFireBase, 'productos'))
        .then((resp) =>
          setProducts(resp.docs.map((p) => ({ productos: p.data(), id: p.id })))
        )
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <>
      {!loading ? (
        <>{`${toast.info('Cargando...')}`}</>
      ) : (
        <div className='divPadre'>{<ItemList productos={products} />}</div>
      )}
    </>
  );
}

export default ItemListContainer;
