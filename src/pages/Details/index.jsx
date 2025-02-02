import { Header } from "../../components/Header";
import { Container, Main, Add } from "./styles";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";
import Ravanello from "../../assets/ravanello.png";

export function Details() {
  return (
    <Container>
      <Header/>
      <Main>
        <div className="back">
          <FiChevronLeft size={24}/>
          <p>voltar</p>
        </div>

        <div className="item">
          <img src={Ravanello} alt="" />
          <div className="description">
            <h1>Salada ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <div className="tags">
              <Tag title="alface"/>
              <Tag title="cebola"/>
              <Tag title="pão naan"/>
              <Tag title="pepino"/>
              <Tag title="rabanete"/>
              <Tag title="tomate"/>
            </div>
            <div className="add">
              <Add>
                <FiMinus size={24}/>
                <p>01</p>
                <FiPlus size={24}/>
              </Add>
              <Button title="incluir - R$25,00"/>
            </div>
          </div>
        </div>
      </Main>
      <Footer/>
    </Container>
  )
}