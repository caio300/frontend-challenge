import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import productsWine from '../context/Context';
import * as Sidebar from './Sidebar';

export default function () {
  const { setWines } = useContext(productsWine);
  const [ filterPrice, setFilterPrice ] = useState('');

  const fetchPrice = async () => {
    const response = await axios.get('https://wine-back-test.herokuapp.com/products');
    const items = response.data.items;
    return items;
  };

  const filterWinePrice = async () => {
    const items = await fetchPrice();
    if(filterPrice.price2 === 0) {
      const filterWinePrice = items.filter((elem) => elem.priceMember > filterPrice.price1);
      setWines(filterWinePrice);
    } else {
        const filterWinePrice = items.filter((elem) => elem.priceMember > filterPrice.price1 && elem.priceMember < filterPrice.price2);
        setWines(filterWinePrice);
    }
  };

  useEffect(() => {
    filterWinePrice();
  }, [filterPrice]);

  return (
    <Sidebar.filterSidebar>
      <h3>Redefina sua busca</h3>
      <p>Por preço</p>
      <div>
        <label htmlFor="40" onClick={() => setFilterPrice({price1: 0, price2: 40})}>
          <input  type="radio" id="40" name="value-wine"/>
          Até R$40
        </label>
        <label htmlFor="40-60" onClick={() => setFilterPrice({price1: 40, price2: 60})}>
          <input  type="radio" id="40-60" name="value-wine"/>
          R$40 a R$60
        </label>
        <label htmlFor="100-200" onClick={() => setFilterPrice({price1: 100,price2: 200})}>
          <input  type="radio" id="100-200" name="value-wine"/>
          R$100 a R$200
        </label>
        <label htmlFor="200-500" onClick={() => setFilterPrice({price1: 200, price2: 500})}>
          <input type="radio" id="200-500" name="value-wine"/>
          R$200 a R$500
        </label>
        <label htmlFor="500" onClick={() => setFilterPrice({price1: 500, price2: 0})}>
          <input type="radio" id="500" name="value-wine"/>
          Acima de R$500
        </label>
      </div>
    </Sidebar.filterSidebar>
  )
}
