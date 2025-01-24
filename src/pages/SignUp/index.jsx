import { BsFillHexagonFill } from "react-icons/bs";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form } from "./styles";

export function SignUp(){
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
            // onChange={e => setPassword(e.target.value )}
            />
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            // onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className="input">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            // onChange={e => setPassword(e.target.value )}
            />
        </div>
        <Button title="Criar Conta"/>

        <a href="">Já tenho uma conta</a>
        
        {/* <Link to="/register">
          Create account
        </Link> */}
      </Form>

    </Container>
  );
}