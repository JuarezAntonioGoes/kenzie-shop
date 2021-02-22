import styled, { keyframes } from "styled-components";

const Tela = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const animaBolaUm = keyframes`
  0%{
    transform: translatey(-60px);
   }
  33%{
    transform: translatey(0px);
  }
  100%{
    transform: translatey(-60px);
   }
`;

const animaBolaDois = keyframes`
  0%{
    transform: translatey(-60px);
  }
  60%{
    transform: translatey(0px);
  }
  100%{
    transform: translatey(-60px);
  }
`;

const animaBolaTres = keyframes`
  0%{
    transform: translatey(-60px);
   }
  73%{
    transform: translatey(0px);
  }
  100%{
    transform: translatey(-60px);
   }
`;

const BolaUm = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0 0.8rem;
  background-color: var(--color-theme);
  border-radius: 50%;

  animation: ${animaBolaUm} 1s infinite;
`;

const BolaDois = styled(BolaUm)`
  animation: ${animaBolaDois} 1s infinite;
`;

const BolaTres = styled(BolaUm)`
  animation: ${animaBolaTres} 1s infinite;
`;

export { Tela, BolaUm, BolaDois, BolaTres };
