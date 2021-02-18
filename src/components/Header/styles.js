import styled from "styled-components";

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 12vh;
  box-shadow: 0 0 2px 1px var(--color-theme);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  margin-right: 1rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  ul li:first-child::after {
    content: "/";
    display: inline-block;
    margin-left: 0.5rem;
  }

  ul li a:hover {
    text-decoration: underline;
  }
`;

export { Logo, HeaderContainer, Nav };
