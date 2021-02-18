import styled from "styled-components";

const ContainerCard = styled.div`
  box-shadow: 0 0 3px 1px var(--color-theme);
  height: 30rem;
  width: 22rem;
  border-radius: 6px;
  overflow-y: ${({ showLogin }) => (showLogin ? "visible" : "scroll")};
  scrollbar-arrow-color: black;

  &::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bdbdbd;
  }
`;

const CabecalhoCard = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--color-primary);
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 0 1px 0 var(--color-theme);
    transition: 0.2s;
  }

  div:first-child {
    grid-column: 1/2;
    border-radius: 4px 0 0 0;
    background-color: ${({ showLogin }) =>
      showLogin ? "var(--color-theme)" : "var(--color-secundary)"};

    color: ${({ showLogin }) =>
      showLogin ? "var(--color-secundary)" : "var(--color-theme)"};
  }
  div:nth-child(2) {
    grid-column: 2/3;
    background-color: ${({ showLogin }) =>
      showLogin ? "var(--color-secundary)" : "var(--color-theme)"};
    border-radius: 0 4px 0 0;

    color: ${({ showLogin }) =>
      showLogin ? "var(--color-theme)" : "var(--color-secundary)"};
  }
`;

export { ContainerCard, CabecalhoCard };
