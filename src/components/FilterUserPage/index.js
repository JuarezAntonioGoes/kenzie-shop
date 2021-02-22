import React from "react";
import { Filter, InputPerPage, Page } from "./style";

const FilterUserPage = ({ filterUsers, setFilterUsers }) => {
  const { perPage, page } = filterUsers;

  const handlePerPage = ({ target }) => {
    if (target.value > 0) {
      setFilterUsers({ ...filterUsers, perPage: target.value });
    }
  };

  const handlePagePrev = () => {
    if (page > 1) {
      setFilterUsers({ ...filterUsers, page: page - 1 });
    }
  };

  const handlePageNext = () => {
    setFilterUsers({ ...filterUsers, page: page + 1 });
  };

  return (
    <Filter>
      <label>
        <span>Usuários por página:</span>
        <InputPerPage
          value={perPage}
          type="number"
          onChange={handlePerPage}
          max="30"
          min="1"
        />
      </label>

      <Page>
        <button onClick={handlePagePrev}>PREV</button> {page}{" "}
        <button onClick={handlePageNext}>NEXT</button>
      </Page>
    </Filter>
  );
};

export default FilterUserPage;
