import React from "react";
import Field from "../Field";
import api from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormLogin } from "./style";
import ButtonSubmit from "../ButtonSubmit";
import Alerta from "../Alerta";
import { useHistory } from "react-router-dom";

const message = {
  required: "Campo Obrigatório",
};

const Login = () => {
  const history = useHistory();

  const [showErroLogin, setShowErroLogin] = React.useState(false);

  const schema = yup.object().shape({
    email: yup.string().required(message.required),
    password: yup.string().required(message.required),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((r) => {
        localStorage.setItem("kenzie-user-tk", r.data.token);
        localStorage.setItem("kenzie-user-id", r.data.user.id);
        history.push("/user");
      })
      .catch((err) => {
        setShowErroLogin(true);
        setTimeout(() => {
          setShowErroLogin(false);
        }, 3000);
      });
  };

  return (
    <>
      <FormLogin onSubmit={handleSubmit(handleLogin)}>
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

        <ButtonSubmit>Login</ButtonSubmit>
      </FormLogin>
      {showErroLogin && <Alerta.Erro>Usuário ou senha incorreta</Alerta.Erro>}
    </>
  );
};

export default Login;
