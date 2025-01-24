import { Container, Banner } from './styles';
import { Header } from '../../components/Header';
import Macarons from '../../assets/macaronsHome.svg'
import { Footer } from '../../components/Footer';

export function Home() {
  return(
    <Container>
      <Header/>
      <Banner>
        <img src={Macarons} alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>

      <Footer/>
    </Container>
  )
}