import { Container } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GradientLeft from "../../assets/GradienteLeft.png";
import GradientRight from "../../assets/GradienteRight.png";

export function Next() {
  return(
    <Container>
      <div className="left">
        <img src={GradientLeft} alt=""/>
        <FiChevronLeft size={40}/>
      </div>
      <div className="right">
        <img src={GradientRight} alt="" />
        <FiChevronRight size={40}/>
      </div>

    </Container>
  )
}