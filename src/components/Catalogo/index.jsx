import Cards from '../Cards';
import * as Catalogo from './Catalogo';

export default function() {
  return (
    <Catalogo.Products>
      <span>49 produtos encontrados</span>
      <Catalogo.Product>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </Catalogo.Product>
    </Catalogo.Products>
  )
}
