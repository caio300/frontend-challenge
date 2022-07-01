import styled from "styled-components";

export const filterSidebar = styled.aside`
  width: 16rem;
  margin-right: 2rem;

  h3 {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: 'Lato', sans-serif;
  }

  p {
    margin-bottom: 1.82rem;
    font-family: 'Lato', sans-serif;
    color: #333333;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  label {
    color: #1D1D1B;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
  }

  input {
    margin-right: 0.857rem;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
    
`;