import * as StyleCard from './Cards';

export default function() {
  return (
    <StyleCard.divCardButton>
      <StyleCard.divCard>
        <StyleCard.imgVinho>
          <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" alt="Imagem do produto" />
          <StyleCard.imgFlag>
            <img src="https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg" alt="Flag" />
          </StyleCard.imgFlag>
        </StyleCard.imgVinho>
        <h3>Bacalhôa Quinta da Garrida Colheita Selecionada 2015</h3>
        <StyleCard.divDesconto>
          <p>R$ 175,90</p>
          <span>60% OFF</span>
        </StyleCard.divDesconto>
        <StyleCard.divSocio>
          <h4>SÓCIO WINE</h4>
          <p>R$ <span>30</span>,00</p>
        </StyleCard.divSocio>
        <StyleCard.divNaoSocio>
          <p>NÃO SÓCIO</p>
          <span>R$ 37,40</span>
        </StyleCard.divNaoSocio>
      </StyleCard.divCard>
      <button>ADICONAR</button>
    </StyleCard.divCardButton>
  )
}
