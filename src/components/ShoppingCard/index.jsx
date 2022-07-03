import { useContext } from 'react';
import productsWine from '../context/Context';
import * as Container from './ShoppingCard';
import { Trash } from 'phosphor-react';


export default function({wine}) {

  const { shoppingCart, setShoppingCart, setCart } = useContext(productsWine);

  const handleClick = (id) => {
    const items = JSON.parse(localStorage.getItem('carrinho'));
    const removedItems = items.filter((wine) => wine.id != id);
    localStorage.setItem('carrinho', JSON.stringify(removedItems));
    setShoppingCart(removedItems.length);
    setCart(removedItems);
  };

  return (
    <>
      <Container.PageCarrinho>
        <Container.sectionCarrinho>
          <div>
            <img className={'img-flag'}src={wine.flag} alt="Imagem da flag" />
            <img className={'img-product'} src={wine.image} alt="Imagem do produto" />
          </div>
          <div className={'div-info'}>
            <h3>{wine.name}</h3>
            <p className={'p-price'}>R$ <span>{Number(wine.price).toLocaleString('pt-br',{minimumFractionDigits:2})}</span></p>
            <div className={'div-socio'}>
              <h4>SÓCIO WINE</h4>
              <p className={'p-discount'}><span>{wine.discount}% OFF</span></p>
              <p>R$ <span>{Number(wine.priceMember).toLocaleString('pt-br',{minimumFractionDigits:2})}</span></p>
            </div>
            <div className={'quantidade'}>
              <p>Quantidade: <span>{wine.qtd}</span></p>
            </div>
          </div>
          <div className={'excluir'}>
            <Trash onClick={() => handleClick(wine.id)} size={25}/>
          </div>
        </Container.sectionCarrinho>
      </Container.PageCarrinho> 
    </>
  );
}
