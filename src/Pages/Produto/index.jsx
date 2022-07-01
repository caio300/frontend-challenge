import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import productsWine from '../../components/context/Context';
import { Plus, Minus, CaretLeft, Star, CaretRight } from 'phosphor-react';
import * as pageProduct from './ProdutoPage';
import axios from 'axios';


export default function() {
  const [ wine, setWine ] = useState({});
  const { infoWine, wines } = useContext(productsWine);
  const params = useParams('/produto/:page/:id');
  const { id } = params;
  const findWine = wines.find((wine) => wine.id === Number(id));
  setWine(findWine);
  console.log(findWine);


/*   const getProdutc = () => {
    
    
  };

  useEffect(() => {
    getProdutc();
  }, []);
 */

  return (
    <pageProduct.containerPage>
      <Header />
      <pageProduct.divProduct>
        <button><CaretLeft className='icon-voltar'/>Voltar</button>
        <pageProduct.mainProduct>
          <img src={infoWine.imgWine} alt="Foto do produto" />
          <section>
            <span className='region'>Vinhos <CaretRight /> Estados Unidos <CaretRight /> Califónia</span>
            <h2>{infoWine.name}</h2>
            <div>
              <img src={infoWine.imgFlag} alt="Imagem da bandeira do vinho" />
              <p>{infoWine.country} {infoWine.type} {infoWine.classification} {infoWine.size} ml</p>
              <Star color= '#F9B950' weight="fill"/><span>({infoWine.rating})</span>
            </div>
            <h3>R$<span>63</span>,67</h3>
            <p className='nao-socio'>NÃO SÓCIO r$ 120,95/UN</p>
            <h4>Comentátrios</h4>
            <article>
              Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.
            </article>
            <div className='div-button'>
              <button className='format-button'><Minus className='format-button'/></button>
              <span className='format-button'>0</span>
              <button className='format-button'><Plus className='format-button'/></button>
              <button className='adicionar'>Adicionar</button>
            </div>
          </section>
        </pageProduct.mainProduct>
      </pageProduct.divProduct>
    </pageProduct.containerPage>
  )
}
