import React, { useContext } from 'react';
import productsWine from '../../components/context/Context';
import Cards from '../Cards';
import * as Catalogo from './Catalogo';

export default function() {
  const { totalItems } = useContext(productsWine);
  const { wines } = useContext(productsWine);

  return (
    <Catalogo.Products>
      <p><span>{totalItems}</span>produtos encontrados</p>
      <hr />
      <Catalogo.Product>
        {wines &&  wines.map((wine) => <Cards key={wine.id} wine={wine} />)}
      </Catalogo.Product>
    </Catalogo.Products>
  )
}
