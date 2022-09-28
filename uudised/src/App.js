import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Asjad from './pages/Asjad';


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
      </Link>
      <Routes>
        <Route path='element' element={<Avaleht/>}/>
        <Route path='uudised' element={<Uudised/>}/>
        <Route path='kontakt' element={<Kontakt/>}/>
        <Route path='meist' element={<Meist/>}/>
        <Route path='asjad' element={<Asjad/>}/>
      </Routes>
    </div>
    );

}

export default App;
