import styled from "styled-components";
export const PageLoja = styled.main`
  display: grid;
  grid-template-columns: 18rem 1fr;
  margin-left: 20rem;
  margin-right: 10rem;

  
  @media screen and (max-width: 800px) {
    margin-left: 1.125rem;
    margin-right: 1.125rem;
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 22.125rem;
  }
`;