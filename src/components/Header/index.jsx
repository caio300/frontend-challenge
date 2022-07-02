import { Link, useHistory } from 'react-router-dom';
import * as Header from './Header.js';
import logoWine from '../../Imagens/black.png';
import Busca from '../../Imagens/Busca.png';
import conta from '../../Imagens/conta.png';
import winebox from '../../Imagens/winebox.png';
import { useContext } from 'react';
import productsWine from '../context/Context.jsx';


export default function () {
  const { fetchWines, searchInput, setSearchInput, shoppingCart } = useContext(productsWine);
  const history = useHistory();


  return (
    <Header.HeaderStyled>
      <img src={logoWine} alt="Logo Wine" />
      
      <nav>
        <Link to='#'>Clube</Link>
        <Link to='/' onClick={() => fetchWines()}>Loja</Link>
        <Link to='#'>Produtores</Link>
        <Link to='#'>Ofertas</Link>
        <Link to='#'>Eventos</Link>
      </nav>
      <menu>
        <button onClick={() => setSearchInput(!searchInput)}>
          <img src={Busca} alt="Buscar" />
        </button>
        <button className='button-conta'>
          <img className='button-conta' src={conta} alt="Sua conta" />
        </button>
        <Header.ButtonCarrinho onClick={() => history.push('/carrinho')}>
          <img src={winebox} alt="Carrinho de compra" />
          <span>{shoppingCart}</span>
        </Header.ButtonCarrinho>
      </menu>
    </Header.HeaderStyled>
  )
};
