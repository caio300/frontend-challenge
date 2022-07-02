import styled from "styled-components";
export const Products = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
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