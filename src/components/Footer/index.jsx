import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";

export function Footer() {
  return(
    <Container>
      <div>
        <BsFillHexagonFill size={33}/>
        <h1>food explorer</h1>
      </div>
      <p>© 2024 - Todos os direitos reservados.</p>
    </Container>
  )
}

      
    