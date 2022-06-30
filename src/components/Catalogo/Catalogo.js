import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
    color: #262626;
  }
`;

export const Product = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 52rem;
`;