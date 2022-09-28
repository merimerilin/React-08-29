import { useRef, useState } from "react";

function LisaToode() {
  const [s6num, uuendaS6num] = useState("Lisa uus toode!");
const nimiRef = useRef();

  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaS6num("Nime sisestusväli ei sa olla tühi");
    } else {
      uuendaS6num("Toode lisatud");
      const tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS)|| null || [] || "";
      tootedLS.push(nimiRef.current.value);
      tootedLS = JSON.stringify(tootedLS);
    }
    
  }
  
  return ( 
   <div>
    <div>[s6num]</div>
    <label>Uue toote nimi</label> <br />
    <input ref={nimiRef} type="text" /> <br />
    <button onClick={lisa}>Sisesta</button> <br />
   </div> );
}

export default LisaToode;