import styled from "styled-components";

const Filter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  box-sizing: border-box;

  label {
    display: flex;
    align-items: center;
  }
`;

const InputPerPage = styled.input`
  width: 2.5rem;
  padding: 0 auto;
  margin: 0 2.5rem 0 0.5rem;
  font-size: 1.2rem;
`;

const Page = styled.div`
  margin: 0 5rem 0 0.5rem;
`;

export { Filter, InputPerPage, Page };
