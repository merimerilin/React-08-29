import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './Avaleht';
import Tagasiside from './Tagasiside';
import TagasisideAndjad from'./TagasisideAndjad';


function App() {
  return (
  <div>
      <Link to="/">
       <button>Avalehele</button>
     </Link>
    <Link to="/tagasiside">
       <button>Tagasisidede lehele</button>
     </Link>
     <Link to="/andjad">
       <button> Vaata, kes tagasisidet on andnud </button>
     </Link>
  
      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
      <Route path="avalehele" element={ <Avaleht/> } />
      <Route path="Tagasiside" element={ <Tagasiside/> } />
      <Route path="/andjad" exact element={<TagasisideAndjad /> }/>
      </Routes>

    
    </div>
  );
}

export default App;
