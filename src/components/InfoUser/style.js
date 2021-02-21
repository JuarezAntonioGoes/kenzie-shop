import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10rem;

  max-width: 600px;
  margin: 4rem auto 3rem auto;
  border-radius: 4px;
  position: relative;
  color: #252525;
  background-color: #e5e4e4;
  position: relative;
`;

const Avatar = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translatex(-50%);
`;

const Info = styled.div`
  /* background-color: blue; */
  padding: 2rem 0 2rem 7rem;
  h1 {
    font-size: 1.4rem;
    color: var(--color-theme);
    font-weight: 600;
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;

const Sobre = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  color: #252525;
  padding: 25px;
  transition: 0.2s;
  margin: 0 1.5rem;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: var(--color-theme);
    font-weight: 600;
  }
`;

const ContainerTec = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem;
  position: relative;

  p {
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: var(--color-theme);
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: center; */
    column-gap: 20px;
  }
`;

const Tecnologias = styled.li`
  margin: 1rem 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #e5e4e4;
  padding: 20px 0;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  max-width: 19rem;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonAddTec = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2.4rem;
  border-radius: 4px;
  border: none;
  background-color: var(--color-theme);
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #0288d1;
    transform: scale(1.01);
  }
`;

const EditarButton = styled.button`
  margin-left: 0.5rem;
`;

const DeleteButton = styled(EditarButton)``;

export {
  Container,
  Avatar,
  Info,
  Sobre,
  Tecnologias,
  ContainerInfo,
  ButtonAddTec,
  ContainerTec,
  EditarButton,
  DeleteButton,
};
