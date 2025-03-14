import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { BsFillHexagonFill } from "react-icons/bs";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form } from "./styles";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return (
    <Container>
      <div id="logo">
        <BsFillHexagonFill size={48}/>
        <h1>food explorer</h1>
      </div>
      
      <Form>

        <h2>Faça Login</h2>

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
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register"> Criar uma conta </Link>
        
      </Form>

    </Container>
  );
}