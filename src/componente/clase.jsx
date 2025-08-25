import Saludo from "./saludo"
import Contador from "./contador"
import BotonPersonalizado from "./boton"

function Clase() {
  const saludar = () => {
    alert("¡hola jeroysofi!");
  }


  return (
    <div>
      <Saludo nombre="sofiayjero" />
      <BotonPersonalizado texto="saludar" color="green" onClick={saludar}></BotonPersonalizado>
      <Contador/>
    </div>
  );
}

export default Clase; 