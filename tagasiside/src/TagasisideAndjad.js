import { useState } from "react";
import andjateFail from "../nimed.json";


function TagasisideAndjad() {
const [andjad, uuendaAndjad] = useState(andjateFail)

const filtreeriM = () =>{
  const vastus = andjad.filter(element =>
    element.startsWith('M'));
    uuendaAndjad(vastus);
}

const filterSixLetters = () =>{
  const vastus =andjad.filter(element => element.lenght === 6);
  uuendaAndjad(vastus);
}

const filterEndingY = () => {
  const vastus = andjad.filter(element = element.endsWith("y"));
  uuendaAndjad(andjad.slice());
}

const sortZA = () => {
  andjad.sort();
  uuendaAndjad(andjad.slice());
}
  const insertElementEST = () => {
  const vastus = andjad.map(element => "EST" + element );
  uuendaAndjad(vastus);
}

const findPaulIndex = () => {
  const index =andjad.indexOf("Paul");
  console.log(index);
  uuendaPaul(index);

}
const leiaEsimeneDtahega= () => {
  const vastys = andjad.map(element => element.startsWith("D"));
  uuendaFirstD(vastus);
  console.log(vastus);
}

return ( <div>
  <div>Pauli järjekorranumber: {Paul}</div>
<div>Kuva palju nimesid on</div>
<button onClick={filtreeriM}>Filtreeri ehk jäta kõik M tähega nimed alles</button>
<button onClick={filterEndingY}>filtreeri ehk jäta kõik täpselt 6 kohalised nimed alles</button>
<button onClick={sortZA}>sorteeri z-a</button>
<button onClick={insertEST}>Proovi.map funktsiooni- kirjuta iga nime ette "est"</button>
<button onClick={findPaulIndex}>Leia üles mis on nime Paul järjekorranumbes conssole.log või html eraldi muutujas</button>
<button onClick={uuendaFirstD} > kuva tähestikus esiene, kellel on D tähega algav nimi.find abil </button>
{andjad.map(element => <div>{element}</div>)}
</div>);

}
export default TagasisideAndjad;