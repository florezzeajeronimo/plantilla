import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Perfil from './paginas/perfil';
import Iniciosesion from './paginas/iniciosesion';
import Registro from './paginas/registro';
import Cuestionario from './paginas/cuestionario';
import Contactanos from './paginas/contactanos';
import Tumedicode24horas from './paginas/tumedicode24horas';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}>   </Route>
          <Route path='/tumedicode24horas' element={<Tumedicode24horas />}> </Route>
          <Route path='/perfil' element={<Perfil />}>   </Route>
          <Route path='/contactanos' element={<Contactanos />}> </Route>
          <Route path='/iniciosesion' element={<Iniciosesion />}> </Route>
          <Route path='/registro' element={<Registro />}> </Route>
          <Route path='/cuestionario' element={<Cuestionario />}> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;