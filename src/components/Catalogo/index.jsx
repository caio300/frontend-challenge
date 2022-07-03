import React, { useContext, useEffect, useState } from 'react';
import productsWine from '../../components/context/Context';
import Cards from '../Cards';
import * as Catalogo from './Catalogo';

export default function() {
  const {
    totalItems,
    filterPrice,
    searchInput,
    wines,
    setWines,
    fetchAllProduct,
  } = useContext(productsWine);

  const [searchNameProduct, setSearchNameProduct ] = useState('');

  const handleOnChange = async ({target}) => {
    setSearchNameProduct(target.value);
    await filterWineName();
  };
  

  const filterWineName = async () => {
    const items = await fetchAllProduct();
    const winesName = items.filter((wine) => (
      wine.name.includes(searchNameProduct) ||
      wine.type.includes(searchNameProduct) ||
      wine.classification.includes(searchNameProduct)
    ));
    console.log(winesName);
    setWines(winesName);
  };


  return (
    <Catalogo.Products>
      <div className='div-input-search'>
        {searchInput && <input onChange={(target) => handleOnChange(target)} placeholder='Pesquise seu produto'></input>}
      </div>
      <p><span>{totalItems}</span>produtos encontrados</p>
      <hr />
      {filterPrice && wines.length === 0 ? <h1>Não há produtos</h1> : 
      <Catalogo.Product>
        {wines &&  wines.map((wine) => <Cards key={wine.id} wine={wine} />)}
      </Catalogo.Product>
      }
    </Catalogo.Products>
  )
}
