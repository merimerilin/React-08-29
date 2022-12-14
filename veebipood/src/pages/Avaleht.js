
import { useState } from "react";
import { Link } from "react-router-dom";

// backspace - panen vasakule
function Avaleht() {
  // vasak pool läheb HTMLi (teha muutuv koht)
      // paremal pool on funktsionaalsus, mille abil saan vasakut poolt muuta
            // kui toimub muutmine, siis antakse läbi parema poole sulgude uus väärtus
                  // useState sulgude sees on esmane väärtus lehele tulles
                          // pärast refreshi või lehelt (URL-lt) ära minnes ja tagasi tulles
  // const [kogus, uuendaKogus] = useState(6);
  // const - constant variable ehk konstantne muutuja
  // let - local variable in entire function
  // const kogus = 6;
  const [kogus,uuendaKogus] = useState(6);
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];

  const nulli = () => {
    // kogus = 0;
    uuendaKogus(0);
  }

  const v2henda = () => {
    if (kogus > 0) {
      // kogus = kogus - 1;
      uuendaKogus(kogus - 1);
      console.log(kogus);
    }
  }

  const suurenda = () => {
    // kogus = kogus + 1;
    uuendaKogus(kogus + 1);
    console.log(kogus);
  }

  const lisaOstukorvi = (klikitudToode) => {
    // "[{"productId":512,"quantity":1}]"
    let ostukorvLS = localStorage.getItem("ostukorv") // || "[]"
    ostukorvLS = JSON.parse(ostukorvLS) || [];
    ostukorvLS.push(klikitudToode);
    ostukorvLS = JSON.stringify(ostukorvLS);
    localStorage.setItem("ostukorv", ostukorvLS);
  }

  return ( 
    <div>
      { kogus > 0 && <button onClick={nulli}>Nulli tagasi</button> }
      <br />
      <button onClick={v2henda}>-</button>
      <span> {kogus} </span>
      <button onClick={suurenda}>+</button>

{/* tooted.map is not a function  ---> mul EI OLE tegemist array-ga */}
      {tooted.map((element,index) => 
        <div key={element}>
          <Link to={"/toode/" + index}>
            <div>{element.nimi}</div>         {/*   Coca-cola */}
          </Link>
          <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}

      {/* <a href="https://www.instagram.com/kimkardashian/?hl=en">
          Meie instagrami
      </a> */}
    </div> );
}

export default Avaleht;
