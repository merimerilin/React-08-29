import { useState } from "react";
import { useRef } from "react";


function Poed() {

  const [poed, uuendaPoed] = useState(["Mustamäe", "Õismäe", "Kristiine", "Lasnamäe", "Põhja-Tallinn", "Kesklinn"]);


  const sorteeri = () => {
    poed.sort(); 
    uuendaPoed(poed.slice());  // mälukoha ära lõikamine - tekitab koopia
  
  }
  const poodRef = useRef();

  const lisaPood = () => {
    poed.push(poodRef.current.value);
    uuendaPoed(poed.slice());
}
 


  const kustuta = (j2rjekorraNumber) => {
    poed.splice(j2rjekorraNumber,1);  // splice ---> kustutab, pean mainima mitmendat ja mitu tükki 
    uuendaPoed(poed.slice());
}

const tyhjenda = () => {
uuendaPoed([]);
}

const filtreeri = () => {
  const vastus = poed.filter(pood => pood.includes("mäe"));
  uuendaPoed(vastus);
}

const muudaK6iki = () => {
    const vastus = poed.map(pood => pood.charAt(0) + pood); 
    uuendaPoed(vastus);
}

const indexRef = useRef();
const uusRef = useRef();

const muudaPood = () => {
    ["Mustamäe", "Õismäe", "Kristiine", "Põhja-Tallinn","kesklinn"][1] = "Kakumäe";
    poed[indexRef.current.value] = uusRef.current.value;
    uuendaPoed(poed.slice());
}
const[valitudPood, uudendaValitudPood] = useState("");

const vaata = (pood) => {
  console.log(pood);
  uudendaValitudPood(pood);

}
   

  return ( 
    <div>
      <button onClick={sorteeri}>Sorteeri A-Z</button> 
      <button onClick={tyhjenda}>Tühjenda</button> 
      <button onClick={filtreeri}>Jäta vaid "mäe"-d sisaldavad alles</button> 
      <button onClick={muudaK6iki}>Muuda kõiki</button> 
      <br />
      
      <label>Uus pood</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisaPood}>Lisa uus pood</button> <br />

      <div>Sinu valitud pood</div>

   
     
      {poed.map((pood,index) => <div key={pood}>{pood} <button onClick={() => kustuta(index)}>x</button>
      <button onClick={() => vaata(pood)}>Vaata</button>
      </div>)} 


      <label>Järjekorranumber</label> <label>Uus väärtus</label>
      <input ref={indexRef} type="text" />  
      <input ref={uusRef} type="text" /> <br />
    
      <button onClick={muudaPood}>Muuda pood</button>
   

      {/* <div key="Mustamäe">Mustamäe <button onClick={()=> kustuta(0)}>x</button></div>
      <div key="Õismäe">Õismäe <button onClick={()=> kustuta(1)}>x</button></div>
      <div key="Kristiine">Kristiine <button onClick={()=> kustuta(2)}>x</button></div>
      <div key="Lasnamäe">Lasnamäe <button onClick={()=> kustuta(3)}>x</button></div>
      <div key="Põhja-Tallinn">Põhja-Tallinn <button onClick={()=> kustuta(4)}>x</button></div>
      <div key="Kesklinn">Kesklinn <button onClick={()=> kustuta(5)}>x</button></div>  */}
  </div> );

}


export default Poed;