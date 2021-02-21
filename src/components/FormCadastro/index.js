import React from "react";
import Field from "../Field";
import { FormCad } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSubmit from "../ButtonSubmit";

import api from "../../services/api";

const message = {
  required: "Campo Obrigatório",
  email: "insira um email válido",
  confSenha: "Você digitou uma senha diferente",
};

const FormCadastro = ({ setErro, setSucesso, setShowLogin }) => {
  const modulosCurso = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      textContent: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      textContent: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      textContent: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      textContent: "Quarto módulo (Backend Avançado)",
    },
  ];

  const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(regEmail, message.email)
      .required(message.required),

    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres!")
      .required(message.required),

    confSenha: yup
      .string()
      .oneOf([yup.ref("password"), null], message.confSenha)
      .required(message.required),

    name: yup.string().required(message.required),

    bio: yup.string().required(message.required),

    contact: yup.string().required(message.required),

    course_module: yup.string().required(message.required),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCad = (data) => {
    api
      .post("/users", data)
      .then((r) => {
        reset();
        setSucesso(true);
        setShowLogin(true);

        setTimeout(() => {
          setSucesso(false);
        }, 3000);
      })
      .catch((err) => {
        setErro(true);

        setTimeout(() => {
          setErro(false);
        }, 3000);
      });
  };

  return (
    <FormCad onSubmit={handleSubmit(handleCad)}>
      <Field.Text
        type="text"
        content="Nome"
        isName="name"
        register={register}
        error={errors}
      />

      <Field.Text
        type="text"
        content="Fale um pouco sobre você"
        isName="bio"
        register={register}
        error={errors}
      />

      <Field.Select
        options={modulosCurso}
        textContent="Selecione o seu módulo atual"
        isName="course_module"
        register={register}
        error={errors}
      />

      <Field.Text
        type="text"
        content="Rede social ou telefone"
        isName="contact"
        register={register}
        error={errors}
      />

      <Field.Text
        type="text"
        content="Email"
        isName="email"
        register={register}
        error={errors}
      />

      <Field.Text
        type="password"
        content="Senha"
        isName="password"
        register={register}
        error={errors}
      />

      <Field.Text
        type="password"
        content="Confirmar senha"
        isName="confSenha"
        register={register}
        error={errors}
      />

      <ButtonSubmit>Cadastro</ButtonSubmit>
    </FormCad>
  );
};

export default FormCadastro;
