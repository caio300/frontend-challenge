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
    fetchWines,
    page,
    setPage
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

  useEffect(() => {
    fetchWines();
  }, []);

  useEffect(() => {
    fetchWines(page);
  }, [page]);

  const changePage = (target) => {
    setPage(target.innerText);
    
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
      <div className='div-change-page'>
        <button onClick={({target}) => changePage(target)} className={page === 1 ? "button-1 selected-page" : "button-1"}>{page === 1 ? page : page - 1}</button>
        <button onClick={({target}) => changePage(target)} className={page !== 1 ? "button-2 selected-page" : "button-2"}>{page === 1 ? page + 1 :page}</button>
        <button onClick={({target}) => changePage(target)} className="button-3">{page === 1 ? page + 2 :page + 1}</button>
        <span>...</span>
        <button onClick={() => setPage(page + 1)} className='button-next'>Próximo</button>
      </div>
    </Catalogo.Products>
  )
}
