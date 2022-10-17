import { useState } from "react";

function ValitudTegelased() {

  const [valitudTegelased, uuendaValitudTegelased] = useState(
    JSON.parse(localStorage.getItem("valitudTegelased")) ||[]);
  
  const eemalda = (index) => {
    ValitudTegelased.splice(index,1);
    uuendaValitudTegelased(ValitudTegelased.slice());
    localStorage.setItem("valitudTegelased", JSON.stringify(ValitudTegelased));
  }
  const tyhjenda= () => {
    uuendaValitudTegelased([]);
    localStorage.setItem("valitudTegelased", JSON.stringify([]));
  }
    return ( 
  <div>
    { valitudTegelased.length > 0 &&<div>Valitud on {valitudTegelased.length} tegelast</div>}
    { valitudTegelased.length > 0 &&<button onClick={tyhjenda}>Tühjenda</button> }
    { valitudTegelased.length > 0 &&<div> Ühtegi tegelast pole valitud </div>}
    {valitudTegelased.map((tegelane , index) =>
      <div>
      <div>{tegelane.eesnimi}</div>
      <div>{tegelane.perenimi}</div>
      <div>{tegelane.elukoht}</div>
      <div>{tegelane.vanus}</div>
      <button onClick={() => eenakda (index)}>Eemalda</button>
      </div>)}
  </div> );
}

export default ValitudTegelased;