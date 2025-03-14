import { Container } from "./styles";
import { Item } from '../../components/Item';
import { Next } from "../../components/Next";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Section({search}) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function fetchItens() {
      const response = await api.get(`/itens?title=${search}`);
      setItens(response.data);
    }

    fetchItens();
  }, [search]);

  return(
    <Container>
      <h1>Refeições</h1>
      <Next/>
      <div className="items">
        {/* {
          itens && itens.map(item => (
            <Item
              key={item.id}
              title
            />

          ))
        } */}
        <Item></Item>
        <Item></Item>
      </div>
    </Container>
  )
}