import { Link, Route, Routes } from 'react-router-dom';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Poed from './pages/Poed';
import './App.css';
import VaataArvuteid from './pages/VaataArvuteid';
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';
import Koduleht from './pages/Koduleht';


function App() {
  return (
    <div className="App">
      <img className="pilt" alt='' src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" />
      <button className="nupp">Nupp</button>

  
      <Link to="/avalehele">
  <button>Avalehele</button>
</Link>
<Link to="/lisa-toode">
  <button>Lisa toode</button>
</Link>
<Link to="/meist">
  <button>Meist</button>
</Link>
<Link to="/ostukorv">
  <button>Ostukorv</button>
</Link>
<Link to="/seaded">
  <button>Seaded</button>
</Link>
<Link to="/poed">
  <button>Poed</button>
</Link>
<Link to="/halda">
  <button>Halda tooteid</button>
</Link>


<Routes>
  <Route path="" element={ <Koduleht/>} />
<Route path="lisa-toode" element={ <LisaToode/> } />
<Route path="meist" element={ <Meist/> } />
<Route path="ostukorv" element={ <Ostukorv/> } />
<Route path="seaded" element={ <Seaded/> } />
<Route path="poed" element={ <Poed/> } />
<Route path='vaata-arvuteid'element= {<VaataArvuteid/>}/>
<Route path='halda'element= {<HaldaTooteid/>} />
<Route path='muuda/:index'element= {<HaldaTooteid />} />
<Route path='muuda/:index'element={<MuudaToode/>} />
<Route path='yksik-toode'element={<YksikToode/>} />
<Route path='toode/:j2rjekorraNumber'element={<j2rjekorraNumber/>} />



</Routes>
</div>
  );
  }

export default App ;