import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Asjad from './pages/Asjad';
import HaldaUudiseid from './pages/HaldaUudiseid';
import LisaUudis from './pages/LisaUudis';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';


function App() {
  return (
      <div>
      
        <Link to="/Avaleht">
      <button>/Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="meist">
        <button>Info meist</button>
      </Link>
      <Link to="asjad">
        <button>asjad</button>
      <Link to="/halda">
        <button>Halda uudiseid</button>
      </Link >
      <Link to="lisa-uudis">
        <button>Lisa uudis</button>
      </Link>
      

      </Link>
      <Routes>
        <Route path='element' element={<Avaleht/>}/>
        <Route path='uudised' element={<Uudised/>}/>
        <Route path='kontakt' element={<Kontakt/>}/>
        <Route path='meist' element={<Meist/>}/>
        <Route path='asjad' element={<Asjad/>}/>
        <Route path='lisa-uudis' element={<LisaUudis />} />
        <Route path='halda' element={<HaldaUudiseid />} />
        <Route path='uudis/:index' element={ <YksUudis/>} />
        <Route path='muuda/:index'element={ <MuudaUudis/> } />
       
      </Routes>
    </div>
    );

}

export default App;
