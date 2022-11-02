import './App.css';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Products from './pages/Products';
import {Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';


function App() {
  


  return ( 
    <div>
       <NavigationBar/>

        <Routes>
          <Route path="" element={ <HomePage /> } />
          <Route path="tooted" element={ <Products /> } />
          <Route path="kontakt" element={ <Contact /> } />
          <Route path="ostukorv" element={ <Cart /> } />
        </Routes>
    </div>
  );
}

export default App;