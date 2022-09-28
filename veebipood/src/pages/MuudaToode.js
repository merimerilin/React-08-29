import {useParams} from "react-router-dom";

function MuudaToode() {
  const { index } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted"))||[];


  return ( <div>MT:{index}</div> );
}

export default MuudaToode;