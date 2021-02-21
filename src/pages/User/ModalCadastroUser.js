import React from "react";
import Field from "../../components/Field";
import ButtonSubmit from "../../components/ButtonSubmit";
import Modal from "../../components/Modal";

import api from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import optionStatus from "../../json/optionStatus.json";

const schema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});

const ModalCadastroUser = ({ setModalTec, token, handleFetch }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerTechnology = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        handleFetch();
        setModalTec(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal showModal={setModalTec}>
      <h1>Adicionar tecnologia</h1>

      <form onSubmit={handleSubmit(registerTechnology)}>
        <Field.Text
          content="Tecnologia"
          type="text"
          isName="title"
          register={register}
          error={errors}
        />

        <Field.Select
          options={optionStatus}
          textContent="Nível"
          isName="status"
          register={register}
          error={errors}
        />

        <ButtonSubmit>Cadastrar</ButtonSubmit>
      </form>
    </Modal>
  );
};

export default ModalCadastroUser;
