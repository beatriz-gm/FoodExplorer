import { Container, TextArea, Img, Main, Ingredients } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/input";
import { FiChevronLeft, FiShare, FiChevronDown } from "react-icons/fi";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";


export function Add() {
return (
  <Container>
    <Header/>
    <Main>
      <div className="back">
        <FiChevronLeft size={24}/>
        <p>voltar</p>
      </div>

      <h1>Adicionar prato</h1>
      <div className="inputs">
        <div className="input" id="image">
          <label htmlFor="img">Imagem do prato</label>
          <Img 
            id="img"
          // onChange={e => setEmail(e.target.value)}
          >
            <FiShare size={24}/>
            Selecione imagem
          </Img>
        </div>
        <div className="input" id="title">
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            placeholder="Ex: Salada Ceasar"
            type="text"
            // onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="input" id="categ">
          <label htmlFor="category">Categoria</label>
          <Input
            id="category"
            placeholder="Refeição"
            type="text"
            // onChange={e => setEmail(e.target.value)}
          />
          <FiChevronDown size={24}/>

        </div>
      </div>

      <div className="inputs">
        <div className="input">
           <label htmlFor="ing">Ingredientes</label>
            <Ingredients id="ing">
              <NewTag
                value="pão naan"
              />
              <NewTag isNew placeholder="add item" />
            </Ingredients>
        </div>
        <div className="input" id="value">
           <label htmlFor="price">Preço</label>
          <Input
            id="price"
            placeholder="R$00,00"
            type="text"
            // onChange={e => setEmail(e.target.value)}
            />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <label htmlFor="desc">Descrição</label>
            <TextArea 
            id="desc"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            type="text"
            // onChange={e => setEmail(e.target.value)}
            />
        </div>
      </div>
        
      <Button id="save" title="Salvar Alterações"/>

    </Main>

      
    <Footer/>
  </Container>
)
}