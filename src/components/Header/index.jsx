import { Container } from "./styles";
// import { FiSearch } from 'react-icons/fi';
import { Input } from "../input";

export function Header() {
  return(
    <Container>
      <h1>food explorer</h1>
      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        // icon={FiSearch}
      />
    </Container>
  )
}