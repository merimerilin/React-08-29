import { useState } from "react"

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa auto!")
  const [n2itaNuppu, uuendaN2itanuppu] = useState(true);

  function addProduct() {
    setMessage("Arvuti lisatud");
    uuendaN2itanuppu(false);

  }
return (
  <div>
    <div>Sõnum: {message}</div>
  <label>Mark</label> <br />
  <input type="text" /> <br />
  <label>Mudel</label> <br />
  <input type="text" /> <br />
  <label>Maksumus</label> <br />
  <input type="number" /> <br />
  { n2itaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button>}
  </div>)
  }
  export default LisaArvuti;
