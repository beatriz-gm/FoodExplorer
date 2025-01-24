import { Container } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";
import { FiSearch } from 'react-icons/fi';
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { Input } from "../input";
import { Button } from "../Button";

export function Header() {
  return(
    <Container>
      <div id="logo">
        <BsFillHexagonFill size={33}/>
        <h1>food explorer</h1>
      </div>
      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        margin-left={100}
      />
      <Button title="Pedidos (0)" icon={PiReceipt} />
      <div id="logout">
        <GoSignOut  size={32}/>
      </div>
    </Container>
  )
}