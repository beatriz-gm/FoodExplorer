import { Container, Add } from "./styles";
import { FiHeart, FiPlus, FiMinus  } from "react-icons/fi";
import Macaron from "../../assets/macaron.png";
import { Button } from "../Button";

export function Item( { data, ...rest }) {
  return(
    <Container {...rest}>
      <FiHeart size={24}/>
      <img src={Macaron} alt="macarons" />
      <h2>kkkk{data}</h2>
      <p>{data}</p>
      <h3>{data}</h3>
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

