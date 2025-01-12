import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi';
import { Input } from "../input";
import { Button } from "../Button";

export function Header() {
  return(
    <Container>
      <h1>food explorer</h1>
      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
      />
      <Button title="Pedidos (0)"/>
    </Container>
  )
}