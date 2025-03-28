import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";

import { BsFillHexagonFill } from "react-icons/bs";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/index.jsx';
import { Container, Form } from "./styles";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário registrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      console.error(error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível registrar usuário.")
      }
    });
  }

  return (
    <Container>
      <div id="logo">
        <BsFillHexagonFill size={48}/>
        <h1>food explorer</h1>
      </div>
      
      <Form>

        <h2>Crie sua conta</h2>

        <div className="input">
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={e => setName (e.target.value )}
            />
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={e => setPassword(e.target.value )}
            />
        </div>
        <Button title="Criar Conta" onClick={handleSignUp} />

        <Link to="/" >Já tenho uma conta</Link>

      </Form>

    </Container>
  );
}