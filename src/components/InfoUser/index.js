import React from "react";
import {
  Avatar,
  Container,
  Info,
  Tecnologias,
  Sobre,
  ContainerInfo,
  ButtonAddTec,
  ContainerTec,
  EditarButton,
} from "./style";

import ImageAvatar from "../../assets/img/avatar.svg";

const InfoUser = ({ user, setModalTec }) => {
  const { avatar_url, name, course_module, bio, techs = [] } = user;
  const [activeTec, setActiveTec] = React.useState(false);

  const handlemouseTec = (e) => {
    console.log("po");
    setActiveTec(true);
  };
  return (
    <>
      <Container>
        <Avatar src={avatar_url ? avatar_url : ImageAvatar} alt="avatar" />
        <Info>
          <h1>{name}</h1>
          <h2>
            Módulo: <br />
            {course_module}
          </h2>
        </Info>
      </Container>

      <ContainerInfo>
        <Sobre>
          <h3>Sobre</h3>
          {bio}
        </Sobre>

        <ContainerTec>
          <h4>Tecnologias</h4>

          {techs.length ? (
            <ul>
              <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>

              {techs.map(({ id, title, status }) => (
                <Tecnologias key={id} onMouseEnter={handlemouseTec}>
                  {title}: {status}
                  <EditarButton active={activeTec}>P</EditarButton>
                </Tecnologias>
              ))}
            </ul>
          ) : (
            <>
              <p>Nenhuma tecnologia cadastrada...</p>
              <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>
            </>
          )}
        </ContainerTec>
      </ContainerInfo>
    </>
  );
};

export default InfoUser;
