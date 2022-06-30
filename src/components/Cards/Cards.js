import styled from "styled-components";


export const divCardButton = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;


  button {
    background: #7EBC43;
    color: #FFFFFF;
    height: 2.46rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 0.87rem;
    line-height: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

`;

export const divCard = styled.div`
  width: 16rem;
  height: 20.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;

  h3 {
    height: 2.7rem;
    width: 14.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.19rem;
    text-align: center;
    margin-top: 0.48rem;
  }
`;

export const imgVinho = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    align-self: center;
    height: 11rem;
  }
`;

export const imgFlag = styled.div`
  position: absolute;
  
  img {
    height: 2.43rem;
    position: absolute;
    bottom: 0.7rem;
    left: 3rem;
  }
`;

export const divDesconto = styled.div`
  display: flex;
  font-family: 'Lato', sans-serif;
  margin-top: 0.33rem;

  p {
    color: #888888;
    font-weight: 700;
    font-size: 0.68rem;
    line-height: 1rem;
    text-decoration: line-through;
  }

  span {
    display: flex;
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    border-radius: 2px;
    background: #F79552;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.75rem;
    text-align: center;
    margin-left: 0.33rem;
  }
`;

export const divSocio = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 0.68rem;
  margin-top: 0.3rem;

  h4 {
    font-weight: 700;
    line-height: 0.625rem;
    margin-right: 0.425rem;
  }

  p {
    color: #B6116E;
    font-weight: 700;
    line-height: 1.68rem;
  }

  span {
    color: #B6116E !important;
  }
`;

export const divNaoSocio = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
  margin-top: 0.3rem;
  

  p {
    color: #888888;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.875rem;
    margin-right: 0.425rem;
  }

  span {
    color: #888888;
    font-family: 'Lato', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
  }
`;