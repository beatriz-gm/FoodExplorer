import { Container, Add } from "./styles";
import { FiHeart, FiPlus, FiMinus  } from "react-icons/fi";
import Macaron from "../../assets/macaron.png";
import { Button } from "../Button";


export function Item() {
  return(
    <Container>
      <FiHeart size={24}/>
      <img src={Macaron} alt="macarons" />
      <h2>Macarons</h2>
      <p>Farinha de amêndoas, manteiga, claras e açúcar.</p>
      <h3>R$79,97</h3>
      <div className="add">
        <Add>
          <FiMinus size={24}/>
          <p>01</p>
          <FiPlus size={24}/>
        </Add>
        <Button title="incluir"/>
      </div>

    </Container>
  )
}

