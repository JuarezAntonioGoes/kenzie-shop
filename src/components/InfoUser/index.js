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
} from "./style";

import ImageAvatar from "../../assets/img/avatar.svg";

const InfoUser = ({ user }) => {
  const { avatar_url, name, course_module, bio } = user;

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
          <Tecnologias>
            <h4>Tecnologias</h4>
            {bio} iohnshiohnsaoisniusdnauscncsunsaocsnscansculscn
            kimsoaincssoicncxoi
          </Tecnologias>

          <ButtonAddTec>+</ButtonAddTec>
        </ContainerTec>
      </ContainerInfo>
    </>
  );
};

export default InfoUser;
