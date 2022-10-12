import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Pagination from 'react-bootstrap/Pagination';

function Products() {
  
const [categoryProducts, setCategoryProducts] = useState(productsFromFile);
const [products, setProducts] = useState(productsFromFile.slice(0,20));

const categories = [...new Set ( productsFromFile.map(element => element.category))]; 

const [activePage, setActivePage] = useState(1);
let pages = [];
for (let index = 0; index < categoryProducts.length/20; index++) {
  pages.push(index+1);
  
}
const sortAZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name));
  setProducts(products.slice());
}
const sortZA = () => {
  products.sort((a,b) => a.name.localeCompare(a.name));
  setProducts(products.slice());
}
const sortPriceAsc = () => {
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}
const sortPriceDesc = () => {
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}
const sortIdAsc = () => {
  products.sort((a,b) => a.id - b.id);
  setProducts(products.slice());
}
const sortIdDesc = () => {
  products.sort((a,b) => a.id - b.id);
  setProducts(products.slice());
}
const showByCategory = (categoryClicked) => {
  const result = productsFromFile.filter(element => element.category === categoryClicked);
  setCategoryProducts(result.slice(0,20));
  setActivePage(1);
}


const changeActivePage = (pageClicked) => {
  setActivePage(pageClicked);
  setProducts(categoryProducts.slice(pageClicked*20-20, pageClicked*20));
}



  return ( 
        <div>
        <Pagination>
          {pages.map(number => 
          <Pagination.Item key={number} onClick={() => changeActivePage(number)}active ={number=== activePage}>
            {number}
          </Pagination.Item>)}
        </Pagination>
          
          {categories.map(element=> 
          <button key={element} onClick={() => showByCategory(element)}>
            {element}
            </button>)}

            <div>Tooteid on {categoryProducts.length}tk</div>

          <button onClick={sortAZ}>Sorteeri A-Z</button>
          <button onClick={sortZA}>Sorteeri Z-A</button>
          <button onClick={sortPriceAsc}>Sorteeri Sorteeri hind kasvavalt</button>
          <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
          <button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
          <button onClick={sortIdDesc}>Sorteeri uuemad enne</button>
          {products.map(element =>
          <div key={element.id}>
          <img src={element.image} alt="" />
          <div>{element.name}</div>
          <div>{element.price}</div>
          <Button variant= "success">Lisa ostukorvi</Button>
        </div>
      )}
  </div> );
}

export default Products;