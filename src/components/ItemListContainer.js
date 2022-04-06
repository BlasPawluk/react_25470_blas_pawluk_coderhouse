import React from 'react';
import './Estilos.css';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { dbFireBase } from './Firebase';
import { getDocs, collection, where, query } from 'firebase/firestore';

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
          const productos = {
            id: documentos.id,
            ...documentos.data(),
          };
          console.log(documentos, documentos.id);
          aux.push(productos);
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
          setProducts(
            resp.docs.map((p) => ({ documentos: p.data(), id: p.id }))
          )
        )
        .catch((err) => console.log(err));
      console.log(q);
    } else {
      getDocs(collection(dbFireBase, 'productos'))
        .then((resp) =>
          setProducts(
            resp.docs.map((p) => ({ documentos: p.data(), id: p.id }))
          )
        )
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <>
      {!loading ? (
        <>{`${toast.info('Cargando...')}`}</>
      ) : (
        <div className='divPadre'>{<ItemList documentos={products} />}</div>
      )}
    </>
  );
}

export default ItemListContainer;
