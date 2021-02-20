import React from "react";
import Field from "../Field";
import ButtonSubmit from "../ButtonSubmit";

import api from "../../services/api";

import { ButtonClose, ContainerModal, FundoEscuro } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import closeSvg from "../../assets/img/botao-fechar.svg";

const schema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});

const Modal = ({ setModalTec, token, handleFetch }) => {
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

  const optionStatus = [
    { value: "Iniciante", textContent: "Iniciante" },
    { value: "Intermediário", textContent: "Intermediário" },
    { value: "Avançado", textContent: "Avançado" },
  ];

  const handleClickFundo = (e) => {
    if (e.target === e.currentTarget) {
      setModalTec(false);
    }
  };

  return (
    <FundoEscuro onClick={handleClickFundo}>
      <ContainerModal>
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
          <ButtonClose
            onClick={() => setModalTec(false)}
            src={closeSvg}
            alt="fechar"
          />
        </form>
      </ContainerModal>
    </FundoEscuro>
  );
};

export default Modal;
