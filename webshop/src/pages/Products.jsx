import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect } from "react";


function Products() {
                           
  const [categoryProducts, setCategoryProducts] = useState(productsFromFile.slice());
  const [products, setProducts] = useState(productsFromFile.slice(0,20)); 
  const categories = [...new Set(productsFromFile.map(element => element.category))];


  useEffect(() => {
    const api = new WooCommerceRestApi({
      url: "http://example.com",
      consumerKey: "ck_67891dc82a4cd4932826cc75287979eea0a43b55",
      consumerSecret: "cs_aaa9a7b7801919086483d954c1b5009b839d3448",
      version: "wc/v3"
    });
    api.get("products", {
      per_page: 20, 
    })
      .then((response) => {
        // Successful request
        setProducts(response.data);
        setCategoryProducts(response.data);
        setCategories([...new Set(response.data.map(element => element.categories[0].name))])
      })
  }, []);


  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let index = 0; index < categoryProducts.length/20; index++) {
    pages.push(index + 1);
  }

  const sortAZ = () => {
    categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortZA = () => {
    categoryProducts.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortPriceAsc = () => {
    categoryProducts.sort((a,b) => a.price - b.price);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }  // a.price

  const sortPriceDesc = () => {
    categoryProducts.sort((a,b) => b.price - a.price);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortIdAsc = () => {
    categoryProducts.sort((a,b) => a.id - b.id);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const sortIdDesc = () => {
    categoryProducts.sort((a,b) => b.id - a.id);
    setProducts(categoryProducts.slice(0,20));
    setActivePage(1);
  }

  const showByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setCategoryProducts(result);
    setProducts(result.slice(0,20));
    setActivePage(1);
  }

  const changeActivePage = (pageClicked) => {
    setActivePage(pageClicked);
    setProducts(categoryProducts.slice(pageClicked*20-20,pageClicked*20));
  }

  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index === -1) {//kui järjekorranumber on -1, siis järelikult teda pole olemas. kui on olemas, index: 0,1,2
      cartLS.push({product: productClicked, quantity: 1});
    } else {
   
      cartLS[index].quantity = cartLS[index].quantity + 1;
    }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
  }


  return ( 
    <div>
      <Pagination>
        {pages.map(number => 
        <Pagination.Item key={number} onClick={() => changeActivePage(number)} active={number === activePage}>
          {number}
        </Pagination.Item>)}
      </Pagination>

      {categories.map(element => 
        <button key={element} onClick={() => showByCategory(element)}>
          {element}
        </button>)}
            {/* {activePage*20} / */}
      <div>Tooteid on {categoryProducts.length} tk</div>

      <div>
        <button onClick={sortAZ}>Sorteeri A-Z</button>
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
        <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
        <button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
        <button onClick={sortIdDesc}>Sorteeri uuemad enne</button>
      </div>

      {products.map(element => 
          <div key={element.id}>
            <img src={element.image} alt="" />
            <div>{element.name}</div>
            <div>{element.price}</div>
  {/* element ---> {"id":7618,"image":"httpss-l225.webp","name":"Case For iPhone","price":5,"description":"Case For iPhone 14 13 12 11 Pro Max Clear Plating Shockproof Soft Silicone Cover","category":"luxury","active":true} */}
            <Button onClick={() => addToCart(element)} variant="success">Lisa ostukorvi</Button>
          </div>
        )}

    </div> );
}

export default Products;