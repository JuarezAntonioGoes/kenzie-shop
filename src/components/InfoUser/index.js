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
  DeleteButton,
} from "./style";

import ImageAvatar from "../../assets/img/avatar.svg";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ModalDeleteTec from "./ModalDeleteTec";
import ModalEditTec from "./ModalEditTec";

const InfoUser = ({ user, setModalTec, admin = false }) => {
  const { avatar_url, name, course_module, bio, techs = [] } = user;
  const [showDeleteTec, setShowDeleteTec] = React.useState(false);
  const [showEditTec, setShowEditTec] = React.useState(false);
  const [idTecDelete, setIdTecDelete] = React.useState("");
  const [idTecEdit, setIdTecEdit] = React.useState("");
  const [userAdmin, setUserAdmin] = React.useState(false);

  React.useEffect(() => {
    setUserAdmin(admin);
  }, [admin]);

  const handleDeleteTec = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    setIdTecDelete(id);
    setShowDeleteTec(true);
  };

  const handleEditTec = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    setIdTecEdit(id);
    setShowEditTec(true);
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
              {userAdmin && (
                <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>
              )}

              {techs.map(({ id, title, status }) => (
                <Tecnologias key={id}>
                  <span>{title}</span>: {status}
                  {userAdmin && (
                    <>
                      <EditarButton onClick={handleEditTec} data-id={id}>
                        <FiEdit2 />
                      </EditarButton>
                      <DeleteButton onClick={handleDeleteTec} data-id={id}>
                        <FiTrash2 />
                      </DeleteButton>
                    </>
                  )}
                </Tecnologias>
              ))}
            </ul>
          ) : (
            <>
              <p>Nenhuma tecnologia cadastrada...</p>
              {userAdmin && (
                <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>
              )}
            </>
          )}
        </ContainerTec>
      </ContainerInfo>

      {showDeleteTec && (
        <ModalDeleteTec
          setShowDeleteTec={setShowDeleteTec}
          idTec={idTecDelete}
        />
      )}

      {showEditTec && (
        <ModalEditTec setShowEditTec={setShowEditTec} idTecEdit={idTecEdit} />
      )}
    </>
  );
};

export default InfoUser;
