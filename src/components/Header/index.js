import React from "react";
import { HeaderContainer, Logo, Nav } from "./styles";
import logoImg from "../../assets/img/kenzie-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link exact="true" to="/">
        <Logo src={logoImg}></Logo>
      </Link>

      <Nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/users">Usuários</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
