import { useContext, useEffect } from 'react';
import productsWine from '../../components/context/Context';
import Header from '../../components/Header';
import ShoppingCard from '../../components/ShoppingCard';
import * as Container from './Carrinho';

export default function() {
  const { cart, setCart } = useContext(productsWine);

  const handleLocalStorage = () => {
    const itemsCart = JSON.parse(localStorage.getItem('carrinho'))
    setCart(itemsCart);
  };

  useEffect(() => {
    handleLocalStorage();
  }, []); 

  return (
    <>
      <Header />
      {cart ? cart.map((wine) => <ShoppingCard key={wine.id} wine={wine}/>) : <h2>Seu carrinho está vazio</h2>}
      <div>R$ {cart && cart.reduce((acc, curr) => acc + curr.price * curr.qtd, 0).toLocaleString('pt-br',{minimumFractionDigits:2})}</div>
    </>
  );
}