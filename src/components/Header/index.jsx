import { Link } from 'react-router-dom';
import * as Header from './Header.js';
import logoWine from '../../Imagens/black.png';
import Busca from '../../Imagens/Busca.png';
import conta from '../../Imagens/conta.png';
import winebox from '../../Imagens/winebox.png';


export default function () {
  return (
    <Header.HeaderStyled>
      <img src={logoWine} alt="Logo Wine" />
      
      <nav>
        <Link>Clube</Link>
        <Link>Loja</Link>
        <Link>Produtores</Link>
        <Link>Ofertas</Link>
        <Link>Eventos</Link>
      </nav>

      <menu>
        <button>
          <img src={Busca} alt="Buscar" />
        </button>
        <button className='button-conta'>
          <img className='button-conta' src={conta} alt="Sua conta" />
        </button>
        <Header.ButtonCarrinho>
          <img src={winebox} alt="Carrinho de compra" />
          <span>0</span>
        </Header.ButtonCarrinho>
      </menu>
    </Header.HeaderStyled>
  )
};
