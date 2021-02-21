import styled from "styled-components";

const ContainerUser = styled.div`
  width: 100%;
  max-width: 200px;
  word-break: break-word;
  border: 1px solid var(--color-theme);
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  line-height: 1rem;

  &:hover {
    transform: scale(1.03);
  }

  p {
    margin-top: 0.7rem;
  }

  span {
    color: var(--color-theme);
    font-weight: 600;
    margin-right: 0.4rem;
  }
`;

const ContainerUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 5rem 0;
`;

const UserImg = styled.img`
  width: 100%;
`;

export { ContainerUser, ContainerUsers, UserImg };
