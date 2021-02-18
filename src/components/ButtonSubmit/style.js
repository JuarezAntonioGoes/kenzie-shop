import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 0.7rem 0;
  color: var(--color-secundary);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: var(--color-theme);
  border: 1px solid var(--color-theme);
  border-radius: 4px;
  cursor: pointer;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: var(--color-theme);
  }
`;

export default Button;
