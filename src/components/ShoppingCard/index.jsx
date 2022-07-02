import { useContext } from 'react';
import productsWine from '../context/Context';
import * as Container from './ShoppingCard';


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
          <img src={wine.image} alt="Imagem do produto" />
          <img src={wine.flag} alt="Imagem da flag" />
          <div>
            <h3>{wine.name}</h3>
            <p>R$ {Number(wine.price).toLocaleString('pt-br',{minimumFractionDigits:2})}</p>
            <span>{wine.discount}% OFF</span>
            <div>
              <h4>SÓCIO WINE</h4>
              <p>R$ <span>{Number(wine.priceMember).toLocaleString('pt-br',{minimumFractionDigits:2})}</span></p>
            </div>
            <div>
              <p>NÃO SÓCIO</p>
              <span>R$ {Number(wine.priceNonMember).toLocaleString('pt-br',{minimumFractionDigits:2})}</span>
            </div>
          </div>
          <div>
            <button onClick={() => handleClick(wine.id)}>Excluir</button>
          </div>
        </Container.sectionCarrinho>
      </Container.PageCarrinho> 
    </>
  );
}
