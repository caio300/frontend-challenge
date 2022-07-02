import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import productsWine from '../../components/context/Context';
import { Plus, Minus, CaretLeft, Star, CaretRight } from 'phosphor-react';
import * as pageProduct from './ProdutoPage';

export default function() {
  const [ infoWine, setInfoWine ] = useState({});
  const { wines, backPage, setBackPage } = useContext(productsWine);
  const params = useParams('/produto/:page/:id');
  const history = useHistory();
  const { id } = params;
  
  const getProductWine = () => {
    const findWine = wines.find((elem) => elem.id === Number(id));
    setInfoWine(findWine);
  };

  useEffect(() => {
    getProductWine();
  }, [wines]);

  const createStar = () => {
    const myArray = new Array(infoWine?.rating).fill('1');
    const myStar = myArray.map((elem) => <Star color= '#F9B950' weight="fill"/>);
    return myStar;
  }

  return (
    <pageProduct.containerPage>
      <Header />
      <pageProduct.divProduct>
        <button onClick={() =>{ history.push('/'), setBackPage(!backPage)}}><CaretLeft className='icon-voltar'/>Voltar</button>
        <pageProduct.mainProduct>
          <img src={infoWine?.image} alt="Foto do produto" />
          <section>
            <span className='region'>Vinhos <CaretRight /> Estados Unidos <CaretRight /> Califónia</span>
            <h2>{infoWine?.name}</h2>
            <div>
              <img src={infoWine?.flag} alt="Imagem da bandeira do vinho" />
              <p>{infoWine?.country} {infoWine?.type} {infoWine?.classification} {infoWine?.size} ml</p>
              {createStar().map((elem, index) => <div key={index}>{elem}</div>)}<span className='rating'>({infoWine?.rating})</span>
            </div>
            <h3>R$ <span>{Number(infoWine?.price).toLocaleString('pt-br',{minimumFractionDigits:2})}</span></h3>
            <p className='nao-socio'>NÃO SÓCIO r$ {Number(infoWine?.priceNonMember).toLocaleString('pt-br',{minimumFractionDigits:2})}/UN</p>
            <h4>Comentátrios</h4>
            <article>
              {infoWine?.sommelierComment}
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
