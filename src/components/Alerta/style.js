import styled, { keyframes } from "styled-components";

const animationAlert = keyframes`
  from{
    opacity:0;
    transform: translatey(20px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

const MessageSucess = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 100;
  padding: 1rem;
  border-radius: 4px;
  color: #fff;
  background-color: #00c853;
  animation: ${animationAlert} 0.2s forwards;
`;
const MessageErr = styled(MessageSucess)`
  background-color: #f44336;
`;

export { MessageSucess, MessageErr };
