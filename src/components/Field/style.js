import styled, { keyframes } from "styled-components";

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 1rem 0.8rem;
  background-color: #e0e0e0;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const Span = styled.span`
  position: absolute;
  color: ${({ error }) => (error ? "red" : "#252525")};
  top: ${({ labelFocus }) => (labelFocus ? "-.7rem" : "50%")};
  transform: translatey(-50%);
  font-size: ${({ labelFocus }) => (labelFocus ? ".7rem" : "1.2rem")};
  left: 1rem;
  transition: 0.3s;
`;

const animationField = keyframes`
  from{
    opacity:0;
    transform:translatey(-15px);
  }
  to{
    opacity:initial;
    transform:initial;
  }
`;

const ContainerField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  animation: ${animationField} 0.3s forwards;
`;

const ShowErro = styled.p`
  color: red;
  margin-top: 0.2rem;
`;

const SelectTag = styled.select`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 1rem 0.8rem;
  background-color: #e0e0e0;
  border-radius: 4px;
  font-size: 1.2rem;
`;

export { Label, Input, Span, ContainerField, ShowErro, SelectTag };
