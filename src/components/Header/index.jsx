import { Container, Logout } from "./styles";
import { BsFillHexagonFill } from "react-icons/bs";
import { FiSearch } from 'react-icons/fi';
import { GoSignOut } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { Input } from "../input";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { DataContext } from '../context/DataContext';
import { useContext } from "react";

export function Header({setSearch}) {
  const { signOut, user } = useAuth();
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

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
        onChange={(e) => {
          setData({...data, search: e.target.value})
        }}
      />
      <Button title="Pedidos (0)" icon={PiReceipt} />
      <Logout onClick={handleSignOut} to="/" >
        <GoSignOut/>
      </Logout>
    </Container>
  )
}