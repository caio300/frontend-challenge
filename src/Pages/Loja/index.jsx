import { useContext, useEffect } from 'react';
import Catalogo from '../../components/Catalogo';
import productsWine from '../../components/context/Context';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import * as Container from './Loja';

export default function() {
  const {  fetchWines } = useContext(productsWine);
  
  useEffect(() => {
    fetchWines();
  }, []);

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
