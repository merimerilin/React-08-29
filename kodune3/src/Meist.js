import { useState } from "react";

function Meist(){
  const [message, määraMessage] = useState("Vali mõni tegevus");

  const määraMessageTööle =()=>{
    console.log("renderdan uuesti");
    määraMessage("Selleks saada meile e-mail jobs@html.com");
  }
return (
  <div>
    <div>{ message }</div>
    <button onClick={määraMessage}>Kandideeri tööle</button>
    <button onClick={määraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}> Vaata meie töötajaid</button>
    <button onClick={() => määraMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>
  </div>
)


}
export default Meist;