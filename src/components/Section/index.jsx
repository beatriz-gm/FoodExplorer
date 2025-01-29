import { Container } from "./styles";
import { Item } from '../../components/Item';

export function Section() {
  return(
    <Container>
      <h1>Refeições</h1>
      <div className="items">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </Container>
  )
}