import { useState } from "react";

function Kontakt(){
  const[aadress, määraAadress] = useState("Tallinn");
  const[telefon, määraTelefon] = useState("5512345");
  const[email, määraEmail] = useState("bla@bla.com");
  const[inliseKeelne, määraIngliseKeelne] = useState("ei");
  
  const ingliseks = () =>{
    määraAadress("London");
    määraTelefon("1234566");
    määraEmail("bla@bla.com");
    määraIngliseKeelne("jah");
  }
  return (
    <div>
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>
      <div>{keel}</div>

    </div>
  )
}
export default Kontakt;