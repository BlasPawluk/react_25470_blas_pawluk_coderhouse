import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  const edad = 22;
  const usuarios = ['Blas', ' ', 'Guido', ' ', 'Eddie'];
  const miOnAdd = () => {};
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main
          nombre='Blas'
          apellido='Pawluk'
          onAdd={miOnAdd}
          edad={edad}
          usuarios={usuarios}
          initial={1}
        ></Main>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
