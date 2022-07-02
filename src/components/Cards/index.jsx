import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import productsWine from '../context/Context';
import * as StyleCard from './Cards';


export default function({wine}) {
  const history = useHistory();
  const { page, setShoppingCart, shoppingCart } = useContext(productsWine);

  const handleClick = () => {
    const myItems = JSON.parse(localStorage.getItem("carrinho"));
    if (myItems) {
      localStorage.setItem('carrinho', JSON.stringify([...myItems, wine]));
      const totalitems = JSON.parse(localStorage.getItem("carrinho"));
      console.log(totalitems.length);
      setShoppingCart(totalitems.length);
    } else {
        localStorage.setItem('carrinho', JSON.stringify([wine]));
        setShoppingCart(shoppingCart+1);
    }
  }

  return (
    <StyleCard.divCardButton>
      <StyleCard.divCard onClick={() =>  history.push(`/produto/${page}/${wine.id}`)}>
        <StyleCard.imgVinho>
          <img src={wine.image} alt="Imagem do produto" />
          <StyleCard.imgFlag>
            <img src={wine.flag} alt="Flag" />
          </StyleCard.imgFlag>
        </StyleCard.imgVinho>
        <h3>{wine.name}</h3>
        <StyleCard.divDesconto>
          <p>{Number(wine.price).toLocaleString('pt-br',{minimumFractionDigits:2})}</p>
          <span>{wine.discount}% OFF</span>
        </StyleCard.divDesconto>
        <StyleCard.divSocio>
          <h4>SÓCIO WINE</h4>
          <p>R$ <span>{Number(wine.priceMember).toLocaleString('pt-br',{minimumFractionDigits:2})}</span></p>
        </StyleCard.divSocio>
        <StyleCard.divNaoSocio>
          <p>NÃO SÓCIO</p>
          <span>R$ {Number(wine.priceNonMember).toLocaleString('pt-br',{minimumFractionDigits:2})}</span>
        </StyleCard.divNaoSocio>
      </StyleCard.divCard>
      <button onClick={() => handleClick()}>ADICONAR</button>
    </StyleCard.divCardButton>
  )
     
}
