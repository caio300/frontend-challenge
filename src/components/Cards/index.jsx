import * as StyleCard from './Cards';


export default function({wine}) {
  return (
    <StyleCard.divCardButton>
      <StyleCard.divCard>
        <StyleCard.imgVinho>
          <img src={wine.image} alt="Imagem do produto" />
          <StyleCard.imgFlag>
            <img src={wine.flag} alt="Flag" />
          </StyleCard.imgFlag>
        </StyleCard.imgVinho>
        <h3>{wine.name}</h3>
        <StyleCard.divDesconto>
          <p>{wine.price.toLocaleString('pt-br', {maximumFrationDigits: 2})}</p>
          <span>{wine.discount}% OFF</span>
        </StyleCard.divDesconto>
        <StyleCard.divSocio>
          <h4>SÓCIO WINE</h4>
          <p>R$ <span>{wine.priceMember.toLocaleString('pt-br', {maximumFrationDigits: 2})}</span></p>
        </StyleCard.divSocio>
        <StyleCard.divNaoSocio>
          <p>NÃO SÓCIO</p>
          <span>R$ {wine.priceNonMember.toLocaleString('pt-br', {maximumFrationDigits: 2})}</span>
        </StyleCard.divNaoSocio>
      </StyleCard.divCard>
      <button>ADICONAR</button>
    </StyleCard.divCardButton>
  )
}
