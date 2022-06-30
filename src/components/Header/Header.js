import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 4.1rem;

  nav {
    width: 30rem;
    height: 5.5rem;
    display: flex;
    justify-content: space-between;
  }

  a {
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.02rem;
    color: #555555;
    text-decoration: none;
    height: 100%;
  }

  a:hover {
    color: #D14B8F;
    transition: color 0.2s;
    border-bottom: 2px solid #D14B8F;
  }

  menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15.75rem;
  }

  menu button{
    background: transparent;
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
  }

  menu button span {
    background: #FFFFFF;
  }

  @media screen and (max-width: 800px) {
    max-width: 50rem;
    padding: 0.5rem;
    margin-bottom: 2rem;

    nav {
      display:none;
    }

    .button-conta {
      display: none;
    }

    menu  {
      width: 10rem;
      gap: 0.5rem;
      justify-content: flex-end;
    }
  }

`;

export const ButtonCarrinho = styled.button`
  span {
    display: flex;
    align-items:center;
    justify-content:center;
    background: #FFFFFF;
    color: #4FBFA5;
    position: relative;
    left: 2rem;
    bottom: 1.5rem;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.3rem;
    border-radius: 50%;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
