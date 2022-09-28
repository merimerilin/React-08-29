import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Seaded from './Seaded';
import Avaleht from './Avaleht';
import Meist from './Meist';
import Kontakt from './Kontakt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="nupp">nupp</button>
        <img className="pilt" src="https://www.shoppa.ee/i/gwey/products/580x580/2/5/1/0/2510753_10519-kloun-riidest.jpg"/>
<h1 className="nimi">Merilin</h1>
      </header> 

      <Link to="/Seaded">
        <button>Seadetesse</button>
      </Link>
      <Link to="/Avaleht">
        <button>Avalehele</button>
      </Link>
      <Link to="/Meist">
        <button>Meist</button>
        <Link to="/Kontakt">
        <button>Kontakt</button>
      </Link></Link>
    </div>
  );
}

export default App;
