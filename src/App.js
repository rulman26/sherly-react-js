import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Reloj from './pages/Reloj';
import Paciente from './pages/Paciente';
import Tratamiento from './pages/Tratamiento';
import Plantilla from './pages/Plantilla';
import Header from './components/Header';
import ItemListContainer from './pages/ItemListContainer';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/relojes' element={<Reloj/>}/>
                <Route path='/joyas' element={<Paciente/>}/>
                <Route path='/accesorios' element={<Tratamiento/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
