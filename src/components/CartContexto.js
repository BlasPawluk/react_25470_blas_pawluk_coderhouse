import { createContext, useState } from 'react';
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (product, contador) => {
    let cartProduct = { product, contador };
    let cartAux = [carrito];

    if (isInCart(product)) {
      cartProduct = product.find((item) => item.product === product);
      cartProduct.contador = cartProduct.contador + contador;
      cartAux = [...carrito];
    } else {
      cartAux = [cartProduct, ...carrito];
    }
    setCarrito(cartAux);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.product.id !== id));
  };
  const clearCart = () => {
    setCarrito([]);
  };
  const isInCart = (product) => {
    if (carrito) {
      carrito.some((item) => item.producto.id === product.id);
    }
  };
  const valorDeContexto = {
    carrito: carrito,
    total: total,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return <Provider value={valorDeContexto}>{children}</Provider>;
};

export default MiProvider;
