import { Link, Route, Routes } from 'react-router-dom';
import LisaArvuti from './src/pages/LisaArvuti';
import VaataArvuteid from './src/pages/VaataArvuteid';
import Avaleht from './src/pages/Avaleht';
import './App.css';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Routes>
        <Route path="" exact element={ <Avaleht />} />
        <Route path="all" exact element={ <LisaArvuti />} />
        <Route path="add" exact element={ <VaataArvuteid />} />
      </Routes>
    </div>
  );
}
