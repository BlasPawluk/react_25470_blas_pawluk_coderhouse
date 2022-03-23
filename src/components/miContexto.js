import { createContext } from 'react';
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = () => {
  return <Provider value={[]}></Provider>;
};

export default MiProvider;
