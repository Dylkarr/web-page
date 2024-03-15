import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Servicio from './pages/Servicio';
import SofiaWorkplace from './pages/SofiaWorkplace'
import Contacto from './pages/Contacto'
import Default from './pages/Default';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/servicio' element={<Servicio/>}/>
          <Route path='/sofiaWorkplace' element={<SofiaWorkplace/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/*' element={<Default/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
