import styled from "styled-components";

export const ContainerProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  .produto {
    margin: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;
    background-color: pink;
    border-radius: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
  }

  h2{
    color: #7A2E07;
  }

  button {
    border: none;
    padding: 10px;
    background-color: #4B251C;
    color: #ffff;
    border-radius: 10px;
  }

  @media (max-width: 432px){
    .produto{
      width: 160px;
      border-radius: 20px;
    }
    img{
      width: 150px;
      border-radius: 20px;
    }
  }

  @media (max-width: 394px){
    .produto{
      width: 150px;
    }
  }

  @media (max-width: 360px){
    .produto{
      width: 140px;
    }
  }
`;

export const ContainerFormulario = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background-color: #fffaf0;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 10px #ccc;
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Campo = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Botao = styled.button`
  background-color: magenta;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color:  #724E30;
  }
`;

export const BotaoSegundo = styled.button`
   position: relative;
   top: 10px;
   background-color: red;
  color: white;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color:rgb(141, 71, 71);
  }
`;

export const LogoDiv = styled.div`
      display: flex;
      justify-content: center;

      img{
        width: 400px;
        
      }
`

export const TituloFormulario = styled.div`
     h2{
       color: #724e30;
       font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
     }


`