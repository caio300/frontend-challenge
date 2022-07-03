import styled from "styled-components";

export const PageCarrinho = styled.main`
  display: flex;
  align-items: center;
  margin-left: 15rem;
  margin-right: 10rem;

  .img-product {
    width: 10rem;
  }

  .img-flag {
    position: absolute;
    width: 2.0rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const sectionCarrinho = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .div-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.2rem;
    color: #1D1D1B;
    height: 2rem;
    width: 20rem;
  }

  .p-price {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    color: #C81A78;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    line-height: 2rem;
  }

  .p-price span {
    font-size: 2rem;
  }

  .div-socio {
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 0.5rem;
  }

  .div-socio h4 {
    height: 100%;
    font-family: 'Lato', sans-serif;
    color: #1D1D1B;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 0.8rem;
    margin-right: 0.5rem;
  }

  .div-socio p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    color: #C81A78;
    font-size: 1rem;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    line-height: 2rem;
    
  }
  .div-socio span {

    font-size: 1.7rem;
  }

  .p-discount span{
    margin-right: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 5rem;
    background-color: #F79552;
    border-radius: 4px;
    color: #1D1D1B;
  }

  .quantidade {
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    line-height: 2rem;
    color: #888888;
  }

  .quantidade span {
    color: #FFFFFF;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    line-height: 2rem;
  }

  .excluir {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .excluir:hover {
    color: #C81A78;
    transition: color 0.1s;
  }

`;