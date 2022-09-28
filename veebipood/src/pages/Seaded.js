import { useRef, useState } from "react";
function Seaded() {

  const [keel, uuendaKeel] = useState(localStorage.getItem("veebilehe_keel") || "est");
  const telRef = useRef();
  const emailRef = useRef();

const muudaKeel = (uusKeel) => {
  uuendaKeel(uusKeel);
  localStorage.setItem("veebilehe_keel", uusKeel);
}

const muudaKeelEst = () => {
  muudaKeel("est");
  localStorage.setItem("veebilehe_keel", "est");
}

const muudaKeelEng = () => {
  muudaKeel("eng");
  localStorage.setItem("veebilehe_keel", "eng");
}

const muudaKeelRus = () => {
  muudaKeel("rus");
  localStorage.setItem("veebilehe_keel", "rus");
}
const sisestaTel = () => {
  localStorage.setItem("tel", telRef.current.value);
}

  const sisestaEmail = () => {
    localStorage.setItem("email", emailRef.current.value);

}
  return ( 
  <div>
    <label>Meie telefoninumber</label>
    <input ref={telRef} defaultValue={localStorage.getItem("tel")} type="text" />
    <button onClick={sisestaTel}>Sisesta</button>
    <br />
    <label>Meie email</label>
    <input ref={emailRef} defaultValue={localStorage.getItem("email")} type="text"  />
    <button onClick={sisestaEmail}>Sisesta</button>
    <br />
    <button onClick={muudaKeelEst}>est</button>
    <button onClick={muudaKeelEng}>eng</button>
    <button onClick={muudaKeelRus}>rus</button>
    { keel === "est" && <div>Leht on eesti keelne</div>}
    { keel === "eng" && <div>Leht on inglise keelne</div>}
    { keel === "rus" && <div>Leht on vene keelne</div>}
  </div> );
}
export default Seaded;