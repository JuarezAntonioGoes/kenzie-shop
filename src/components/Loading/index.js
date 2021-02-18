import React from "react";
import { BolaUm, Tela, BolaDois, BolaTres } from "./style";

const Loading = () => {
  return (
    <Tela>
      <div>
        <BolaUm />
        <BolaDois />
        <BolaTres />
      </div>
    </Tela>
  );
};

export default Loading;
