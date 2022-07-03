import { useContext, useEffect, useState } from 'react';
import Catalogo from '../../components/Catalogo';
import productsWine from '../../components/context/Context';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import * as Container from './Loja';

export default function() {
  const {  fetchWines, page, setPage } = useContext(productsWine);
  const [ css, setCss ] = useState('')
  useEffect(() => {
    fetchWines();
  }, []);

  useEffect(() => {
    fetchWines(page);
  }, [page]);

  const changePage = (target) => {
    setPage(target.innerText);
    
  };

  const printButton = (target) => {
    if(Number(target.innerText) === page) {
      target.className += ' selected-page';
    }
  };

  return (
    <>
      <Header />
      <Container.PageLoja>
        <Sidebar />
        <Catalogo />
        <div>
          <button onClick={({target}) => {changePage(target), printButton(target)}} className='button-1'>{page === 1 ? page : page - 1}</button>
          <button onClick={({target}) => {changePage(target), printButton(target)}} className='button-2'>{page === 1 ? page + 1 :page}</button>
          <button onClick={({target}) => {changePage(target), printButton(target)}} className='button-3'>{page === 1 ? page + 2 :page + 1}</button>
          <span>...</span>
          <button onClick={() => setPage(page + 1)} className='button-next'>Próximo</button>
        </div>
      </Container.PageLoja>
    </>
  )
};
