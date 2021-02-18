import React from "react";
import CardLoginCad from "../CardLoginCad";
import { Main, Title } from "./style";

const Presentation = () => {
  return (
    <Main>
      <Title>
        <span>Bem vindo</span>
        <span>a Kenzie Hub</span>
      </Title>

      <CardLoginCad></CardLoginCad>
    </Main>
  );
};

export default Presentation;
