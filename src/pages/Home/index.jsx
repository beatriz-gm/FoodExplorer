import { Container, Banner, Section } from './styles';
import { Header } from '../../components/Header';
import { Next } from "../../components/Next";
import { Item } from '../../components/Item';
import { api } from '../../services/api';
import Macarons from '../../assets/macaronsHome.svg';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';

export function Home() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/categories', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@foodexplorer:token')}`
          }
        });
        setCategories(response.data);  
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get(`/items`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@foodexplorer:token')}`
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    }
    fetchItems();
  }, []);

  return(
    <Container>
      <Header />
      <body>
      <Banner>
        <img src={Macarons} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>

      {categories.map(category => {
          const itemsInCategory = items.filter(item => item.category_id === category.id);

          return (
            <Section key={category.id}>
              <h1>{category.name}</h1>
              <div className="item-list">
                {itemsInCategory.length > 0 ? (
                  itemsInCategory.map(item => (
                    <Item
                      key={String(item.id)}
                      data={item}
                    />
                  ))
                ) : (
                  <p>Nenhum item disponível nesta categoria</p>
                )}
              </div>
            </Section>
          );
        })}
      </body>

      <Footer/>
    </Container>
  )
}