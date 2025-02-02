import { Container } from "./styles";
import { Item } from '../../components/Item';
import { Next } from "../../components/Next";

export function Section() {
  return(
    <Container>
      <h1>Refeições</h1>
      <Next/>
      <div className="items">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </Container>
  )
}