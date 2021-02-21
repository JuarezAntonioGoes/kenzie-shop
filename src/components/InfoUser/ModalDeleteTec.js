import React from "react";
import Modal from "../Modal";

import { UsrContext } from "../../context/UserContext";

import api from "../../services/api";
import ButtonSubmit from "../ButtonSubmit";

const ModalDeleteTec = ({ idTec, setShowDeleteTec }) => {
  const { token, handleFetch } = React.useContext(UsrContext);

  const handleDelete = (e) => {
    e.preventDefault();
    api
      .delete(`/users/techs/${idTec}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        handleFetch();
        setShowDeleteTec(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal showModal={setShowDeleteTec}>
      <form onSubmit={handleDelete}>
        <h1>Excluir tecnologia</h1>
        <ButtonSubmit>Excluir</ButtonSubmit>
      </form>
    </Modal>
  );
};

export default ModalDeleteTec;
