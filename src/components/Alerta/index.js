import React from "react";
import Erro from "./Erro";
import { MessageSucess } from "./style";

const Sucesso = ({ children }) => {
  return <MessageSucess>{children}</MessageSucess>;
};

const Alerta = {
  Sucesso,
  Erro,
};

export default Alerta;
