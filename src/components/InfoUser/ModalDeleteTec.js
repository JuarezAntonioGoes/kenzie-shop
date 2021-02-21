import React from "react";
import Modal from "../Modal";
import { UserContext } from "../../pages/User";

import api from "../../services/api";

const ModalDeleteTec = ({ idTec, setShowDeleteTec }) => {
  const { token, handleFetch } = React.useContext(UserContext);
  console.log(token);

  const handleDelete = () => {
    api
      .delete(`/users/techs/${idTec}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        console.log(r);
        handleFetch();
        setShowDeleteTec(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal showModal={setShowDeleteTec}>
      <h1>Excluir tecnologia</h1>
      <button onClick={handleDelete}>Excluir</button>
    </Modal>
  );
};

export default ModalDeleteTec;
