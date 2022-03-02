import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const edad = 22;
  const usuarios = ['Blas', ' ', 'Guido', ' ', 'Eddie'];
  //const miComponente = Footer;
  return (
    <>
      <NavBar />
      <Main
        nombre='Blas'
        apellido='Pawluk'
        edad={edad}
        usuarios={usuarios}
      ></Main>
      <Footer />
    </>
  );
}

export default App;
