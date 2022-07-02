import * as Container from './ShoppingCard';


export default function() {
  return (
    <>
      <Container.PageCarrinho>
        <Container.sectionCarrinho>
          <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png" alt="Imagem do produto" />
          <img src="https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg" alt="Imagem da flag" />
          <div>
            <h3>Bacalhôa Quinta da Garrida Colheita Selecionada 2015</h3>
            <p>R$ 175,00</p>
            <span>60% OFF</span>
            <div>
              <h4>SÓCIO WINE</h4>
              <p>R$ <span>96</span>,00</p>
            </div>
            <div>
              <p>NÃO SÓCIO</p>
              <span>R$ 114,00</span>
            </div>
          </div>
          <div>
            <button>Excluir</button>
          </div>
        </Container.sectionCarrinho>
      </Container.PageCarrinho> 
    </>
  );
}
