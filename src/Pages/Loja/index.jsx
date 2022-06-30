import Catalogo from '../../components/Catalogo';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import * as Container from './Loja';

export default function() {
  return (
    <>
      <Header />
      <Container.PageLoja>
        <Sidebar />
        <Catalogo />
      </Container.PageLoja>
    </>
  )
};
