import styled, { keyframes } from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const animationTitle = keyframes`
  from{
    opacity:0;
    transform: translatex(-30px);
  }
  to{
    opacity:1;
    transform: initial;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 5.5rem;
  font-weight: 700;
  color: var(--color-theme);

  span {
    animation: ${animationTitle} 0.4s forwards;
  }

  span:nth-child(2) {
    opacity: 0;
    animation-delay: 0.2s;
  }
`;

export { Main, Title };
