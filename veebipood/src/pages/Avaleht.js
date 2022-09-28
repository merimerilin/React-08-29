import { useState } from "react";
function Avaleht() {
const [kogus, uuendaKogus] = useState(6);

const tooted = JSON.parse(localStorage.getItem("tooted"))||[];

const nulli = () => {
  uuendaKogus(0); 
} 

const v2henda = () => {
  if (kogus > 0 ) {
    uuendaKogus(kogus - 1); 
  }
} 
  const suurenda = () => {
    uuendaKogus(kogus + 1); 
}
const lisaOstukorvi = (klikitudToode) => {
  let ostukorvLS = localStorage.getItem("ostukorv") || "[]";
  ostukorvLS.push(klikitudToode);
  ostukorvLS = JSON.stringify(ostukorvLS);
  localStorage.setItem("ostukorv", ostukorvLS);
}
  return ( 
  <div>
    {kogus>0 && <button onClick={nulli}>Nulli tagasi</button>}
    <br />
    <button onClick={v2henda}>-</button>
    <span> {kogus} </span>
    <button onClick={suurenda}>+</button>

    {tooted.map(element =>
       <div key={element}>
        {element}</div>)}
        <button>Lisa ostukorvi</button>
  </div>);
}

export default Avaleht;