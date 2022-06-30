import Header from '../../components/Header';
import { Plus, Minus, CaretLeft, Star } from 'phosphor-react';
import * as pageProduct from './ProdutoPage';


export default function() {
  return (
    <pageProduct.containerPage>
      <Header />
      <pageProduct.divProduct>
        <button><CaretLeft className='icon-voltar'/>Voltar</button>
        <pageProduct.mainProduct>
          <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" alt="" />
          <section>
            <span>Vinhos - Estados Unidos - Califónia</span>
            <h2>Apothic Red 2019</h2>
            <div>
              <img src="https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg" alt="" />
              <p>Estados Unidos Tinto Meio Seco/DemiSec 750 ml</p>
              <Star color= '#F9B950' weight="fill"/>
              <Star color= '#F9B950' weight="fill"/>
              <Star color= '#F9B950' weight="fill"/>
              <Star color= '#F9B950' weight="fill"/>
            </div>
            <h3>R$<span>63</span>,67</h3>
            <p className='nao-socio'>NÃO SÓCIO r$ 120,95/UN</p>
            <h4>Comentátrios</h4>
            <article>
              Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.
            </article>
            <div className='div-button'>
              <button><Minus /></button>
              <span>0</span>
              <button><Plus /></button>
              <span className='adicionar'>Adicionar</span>
            </div>
          </section>
        </pageProduct.mainProduct>
      </pageProduct.divProduct>
    </pageProduct.containerPage>
  )
}
