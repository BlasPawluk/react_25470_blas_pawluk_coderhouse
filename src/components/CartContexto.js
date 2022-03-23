import { createContext, useState } from 'react';
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (product, contador) => {
    let cartProduct = { product, contador };
    console.log('cartProduct', cartProduct);
    let cartAux = [];
    setCarrito(cartAux);
    if (isInCart(product)) {
      cartProduct = carrito.find((item) => item.product === product);
      cartProduct.contador = cartProduct.contador + contador;
    } else {
      cartAux = [cartProduct, ...carrito];
    }
  };

  const removeItem = () => {};
  const clearCart = () => {
    setCarrito([]);
  };
  const isInCart = (product) => {
    if (carrito) {
      carrito.some((item) => item.product === product);
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
