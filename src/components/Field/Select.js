import React from "react";
import { ContainerField, SelectTag, ShowErro } from "./style";

const Select = ({ options, textContent, isName, register, error }) => {
  return (
    <ContainerField>
      <SelectTag name={isName} ref={register}>
        <option value="">{textContent}</option>

        {options.map(({ value, textContent }, index) => (
          <option key={index} value={value}>
            {textContent}
          </option>
        ))}
      </SelectTag>
      <ShowErro>{error[isName]?.message}</ShowErro>
    </ContainerField>
  );
};

export default Select;
