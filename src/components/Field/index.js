import React from "react";
import Select from "./Select";
import { ContainerField, Input, Label, ShowErro, Span } from "./style";

const Text = ({ content, register, isName, error, type }) => {
  const [labelFocus, setLabelFocus] = React.useState(false);

  const handleFocus = () => {
    setLabelFocus(true);
  };

  const handleBlur = ({ target }) => {
    if (target.value === "") {
      setLabelFocus(false);
    }
  };

  const handleChange = ({ target }) => {
    if (target.value !== "") {
      setLabelFocus(true);
    }
  };

  return (
    <ContainerField>
      <Label>
        <Span labelFocus={labelFocus} error={error[isName]} isName={isName}>
          {content}
        </Span>
        <Input
          onChange={handleChange}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={isName}
          ref={register}
        />
      </Label>
      <ShowErro>{error[isName]?.message}</ShowErro>
    </ContainerField>
  );
};

const Field = {
  Text,
  Select,
};

export default Field;
