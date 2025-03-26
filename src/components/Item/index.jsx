import { Container, Add } from "./styles";
import { FiHeart, FiPlus, FiMinus  } from "react-icons/fi";
import Macaron from "../../assets/macaron.png";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export function Item( { id, title, description, price }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return(
    <Container onClick={() => handleDetails(id)}>
      <FiHeart size={24}/>
      <img src={Macaron} alt="macarons" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
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

