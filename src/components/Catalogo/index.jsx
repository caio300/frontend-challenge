import React, { useContext } from 'react';
import productsWine from '../../components/context/Context';
import Cards from '../Cards';
import * as Catalogo from './Catalogo';

export default function() {
  const { wines } = useContext(productsWine);

  return (
    <Catalogo.Products>
      <span>49 produtos encontrados</span>
      <hr />
      <Catalogo.Product>
        {wines &&  wines.map((wine) => <Cards key={wine.id} wine={wine} />)}
      </Catalogo.Product>
    </Catalogo.Products>
  )
}
