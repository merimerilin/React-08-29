import { useState } from "react";

function Meist () {
  const [kontakt, n2itaKontakt] = useState("");

  return ( <div>
<div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
<div>Meie töötajad</div>
<br />
<div>Arvo Pärt</div>
{/* <div>+346271827</div> */}
<div>Uudisklippide taustamuusika</div>
<button onClick={() => n2itaKontakt('+346271827')}>Võta ühendust</button>
<br /> <br />
<div>Kelly Sildaru</div>
{/* <div>+376828192</div> */}
<div>Püstolreporter</div>
<button onClick={() => n2itaKontakt('+376828192')}>Võta ühendust</button>
<br /> <br />
<div>Edward von Lõngus</div>
{/* <div>+39827361</div> */}
<div>Uudiste kujundamine</div>
<button onClick={() => n2itaKontakt('+39827361')}>Võta ühendust</button>
<br /><br />
<div>Kerli Kõiv</div>
{/* <div>+3459278427</div> */}
<div>Välisturgude spetsialist</div>
<button onClick={() => n2itaKontakt('+3459278427')}>Võta ühendust</button>
<br /> <br />
{ kontakt!==""&& <div>Tema kontakt: {kontakt}</div>}
<div>Tema kontakt: {kontakt}</div>
</div>  );
}

export default Meist;