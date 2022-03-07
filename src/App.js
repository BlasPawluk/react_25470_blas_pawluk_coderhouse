import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
    const edad = 22;
    const usuarios = ['Blas', ' ', 'Guido', ' ', 'Eddie'];
    const miOnAdd = () => {}
    //const miComponente = Footer;
    return (<>
        <NavBar/>
        <Main 
        nombre = "Blas"
        apellido = "Pawluk"
        onAdd = { miOnAdd }
        edad = { edad }
        usuarios = { usuarios }
        initial = { 1 } >
        
        </Main> <
        Footer / >
        </>
    );
}

export default App;