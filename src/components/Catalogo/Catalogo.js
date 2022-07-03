import styled from "styled-components";
export const Products = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  
  .selected-page {
    background: #B6116E !important;
  }

  .div-change-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    gap: 1rem;
  }

  .div-change-page button {
    border: 1px solid #B6116E;
    background: #DEDEDE;
    border-radius: 3px;
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    cursor: pointer;
  }

  .button-1 {
    width: 2.375rem;
    height: 2.375rem;
  }

  .button-2 {
    width: 4.56rem;
    height: 2.375rem;
  }

  .button-3 {
    width: 2.375rem;
    height: 2.375rem;
  }

  .button-next {
    border: none !important;
    color: #B6116E;
  }

  .div-change-page span {
    color: #B6116E !important;
  }

  .div-input-search {
    width: 20rem;
    height: 2rem;
    margin-bottom: 0.5rem;
  }
  .div-input-search input {
    padding-left: 0.5rem;
    width: 100%;
    height: 100%;
    border: 1px solid #D14B8F;
    border-radius: 4px;
  }

  h1 {
    margin-top: 2rem;
    margin-left: 2rem;
    font-family: 'Lato', sans-serif;
    color: #DEDEDE;
  }
  hr {
    color: #DEDEDE;
    border: none
  }
  p {
    font-family: 'Lato', sans-serif;
    color: #888888;
  }
  span {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #262626 !important;
    margin-right: 0.5rem
  }
  @media screen and (max-width: 800px) {
    width: 1fr;
    span {
      color: #888888;
      margin-bottom: 1.25rem;
    }
    hr {
      color: #262626;
      border: 1px solid #888888;
    }
  }
`;
export const Product = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 52rem;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 22.125rem;
  }
`;