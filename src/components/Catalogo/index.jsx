import Cards from '../Cards';
import * as Catalogo from './Catalogo';

export default function() {
  return (
    <Catalogo.Products>
      <span>49 produtos encontrados</span>
      <Cards/>
    </Catalogo.Products>
  )
}
