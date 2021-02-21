import React from "react";
import api from "../../services/api";
import { UserContext } from "../../pages/User";
import Field from "../Field";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSubmit from "../ButtonSubmit";
import Modal from "../Modal";

import optionStatus from "../../json/optionStatus.json";

const schema = yup.object().shape({
  status: yup.string().required("Campo obrigatório"),
});

const ModalEditTec = ({ idTecEdit, setShowEditTec }) => {
  const { token, handleFetch } = React.useContext(UserContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    api
      .put(`/users/techs/${idTecEdit}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        console.log(r);
        handleFetch();
        setShowEditTec(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal showModal={setShowEditTec}>
      <form onSubmit={handleSubmit(handleEdit)}>
        <h1>Editar tecnologia: {}</h1>

        <Field.Select
          options={optionStatus}
          textContent="Nível"
          isName="status"
          register={register}
          error={errors}
        />

        <ButtonSubmit>Editar</ButtonSubmit>
      </form>
    </Modal>
  );
};

export default ModalEditTec;
