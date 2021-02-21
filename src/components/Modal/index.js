import React from "react";
import { ButtonClose, ContainerModal, FundoEscuro } from "./style";
import closeSvg from "../../assets/img/botao-fechar.svg";

const Modal = ({ children, showModal }) => {
  const handleClickFundo = (e) => {
    if (e.target === e.currentTarget) {
      showModal(false);
    }
  };

  return (
    <FundoEscuro onClick={handleClickFundo}>
      <ContainerModal>
        {children}

        <ButtonClose
          onClick={() => showModal(false)}
          src={closeSvg}
          alt="fechar"
        />
      </ContainerModal>
    </FundoEscuro>
  );
};

export default Modal;
