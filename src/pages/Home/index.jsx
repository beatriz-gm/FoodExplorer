import { Container, Banner, Section } from './styles';
import { Header } from '../../components/Header';
import { Next } from "../../components/Next";
import { Item } from '../../components/Item';
import { api } from '../../services/api';
import Macarons from '../../assets/macaronsHome.svg';
import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';
// import { useData } from '../../components/context/DataContext';

export function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  // const {data} = useData();

  // useEffect(() => {
  //   const title = data.search
  //   const params = new URLSearchParams({title}).toString();
  //   const url = `https://localhost:3322/items?${params}`;

  //   async function fetchItems() {
  //     const data = await fetch(url,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${localStorage.getItem('@foodexplorer:token')}`
          
  //         }
  //       });
  //       const items = await data.json();
  //       setItems(items);
  //   }
  //   fetchItems();
  // }, [data]);

  // useEffect(() => {
  //   const title = data
  //   const params = new URLSearchParams({title}).toString();
  //   const url = `https://localhost:3322/items?${params}`;

  //   async function showItems() {
  //     const data = await fetch(url,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${localStorage.getItem('@foodexplorer:token')}`
  //         }
  //       });
  //       const items = await data.json();
  //       setItems(items);   
  //   }
  //   showItems();
  // }, []);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await api.get(`/items?title=${search}`, {
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

      <Section >
        <h1>teste</h1>
        <Next/>
        <div className="items">
          {
            items.map(item => (
              <Item
              key={String(item.id)}
              data={item}
              // id={item.id}
              // title={item.title}
              // description={item.description}
              />
            ))
          }
        </div>
      </Section>
        
      </body>

      <Footer/>
    </Container>
  )
}