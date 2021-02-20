import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
  from{
    opacity:0;
    transform: translatey(30px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

const ContainerModal = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #fafafa;
  color: #252525;
  border-radius: 4px;
  animation: ${animationModal} 0.3s forwards;
  position: relative;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonClose = styled.img`
  position: absolute;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  color: red;
  height: 1.5rem;
  top: 0.7rem;
  right: 0.7rem;
  transition: 0.2s;

  &:hover {
    transform: scale(1.3);
  }
`;

const FundoEscuro = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ContainerModal, FundoEscuro, ButtonClose };
