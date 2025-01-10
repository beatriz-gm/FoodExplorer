import { Header } from "../../components/Header";
import { Main } from "./styles";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Input } from "../../components/Input";

export function Details() {
  return (
    <Main>
      <Header/>
      <Button title="entrar"/>
      <Button title="sair"/>
      <Tag title="tag"/>
      <Input type="text"
        placeholder="teste"/>
    </Main>
  )
}