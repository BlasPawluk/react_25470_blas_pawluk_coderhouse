import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

function App() {
  return (
    <div>
      <NavBar />
      <Main nombre='Blas' apellido='Pawluk' />
      <Footer />
    </div>
  );
}

export default App;
