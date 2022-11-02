import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Sedes from './pages/Sedes';
import Paciente from './pages/Paciente';
import Tratamiento from './pages/Tratamiento';
import Plantilla from './pages/Plantilla';
import Header from './components/Header';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/pacientes' element={<Paciente/>}/>
                <Route path='/tratamientos' element={<Tratamiento/>}/>
                <Route path='/sedes' element={<Sedes/>}/>
                <Route path='/plantillas' element={<Plantilla title="titulo" description="descripcion del producto"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
