import styled from "styled-components";
export const containerPage = styled.section``;
export const divProduct = styled.div`
  display: grid;
  grid-template-columns: 5.8rem 1fr;
  margin-left: 16rem;
  margin-right: 16rem;
  button {
    color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    width: 5.8rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .icon-voltar {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-right: 0;
    button {
      display: none;
    }
    .icon-voltar {
      display: none;
    }
  }
`;
export const mainProduct = styled.main`
  display: flex;
  margin-left: 3rem;
  margin-top: 2rem;
  font-family: 'Lato', sans-serif;
  padding-bottom: 3rem;
  section {
    padding-top: 1.5rem;
  }
  .region {
    display:flex
  }
  h2 {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2rem;
    color: #111111;
    margin-top: 1.125rem;
  }
  div {
    display: flex;
    align-items: flex-end;
    margin-top: 0.5rem;
  }
  div img {
    height: 1rem;
    margin-right: 0.5rem;
  }
  div p {
    color: #555555;
    font-weight: 400;
    font-size: 0.875rem;
    margin-right: 0.5rem;
  }
  h3 {
    margin-top: 3rem;
    color: #C81A78;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 2rem;
    line-height: 2rem;
  }
  .nao-socio {
    font-weight: 700;
    color: #888888;
    font-size: 1rem;
    line-height: 1.875rem;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 3rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #111111;
  }
  article {
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: #666666;
    line-height: 150%
  }
  .div-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    background: #7EBC43;
    width: 20.5rem;
    height: 3.5rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    color: #FFFFFF;
  }
  .div-button button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #FFFFFF;
    background: #7EBC43;
    border: none;
  }
  .adicionar {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 23rem;
    margin-left: 0;
    padding: 1rem;
    padding-bottom: 3rem;
    .format-button {
      display: none;
      width: 0;
    }
    .div-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
`;