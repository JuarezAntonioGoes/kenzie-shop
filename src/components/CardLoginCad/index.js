import React from "react";
import Alerta from "../Alerta";
import FormCadastro from "../FormCadastro";
import Login from "../Login";
import { CabecalhoCard, ContainerCard } from "./style";

const CardLoginCad = () => {
  const [showLogin, setShowLogin] = React.useState(true);
  const [sucesso, setSucesso] = React.useState(false);
  const [erro, setErro] = React.useState(false);

  return (
    <>
      <ContainerCard showLogin={showLogin}>
        <CabecalhoCard showLogin={showLogin}>
          <div onClick={() => setShowLogin(true)}>Login</div>
          <div onClick={() => setShowLogin(false)}>Cadastro</div>
        </CabecalhoCard>

        {showLogin ? (
          <Login />
        ) : (
          <FormCadastro
            setSucesso={setSucesso}
            setErro={setErro}
            setShowLogin={setShowLogin}
          />
        )}
      </ContainerCard>

      {sucesso && <Alerta.Sucesso>Cadastro feito com sucesso</Alerta.Sucesso>}
      {erro && <Alerta.Erro>Erro no cadastro</Alerta.Erro>}
    </>
  );
};

export default CardLoginCad;
