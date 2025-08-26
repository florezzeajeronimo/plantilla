import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Perfil from './paginas/perfil';
import Contacto from './paginas/contacto';
import Cursos from './paginas/cursos';
import Iniciosesion from './paginas/iniciosesion';
import Registro from './paginas/registro';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}>   </Route>
          <Route path='/perfil' element={<Perfil />}>   </Route>
          <Route path='/contacto' element={<Contacto />}> </Route>
          <Route path='/iniciosesion' element={<Iniciosesion />}> </Route>
          <Route path='/registro' element={<Registro />}> </Route>
          <Route path='/cursos' element={<Cursos />}> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;