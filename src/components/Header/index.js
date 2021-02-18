import React from "react";
import { HeaderContainer, Logo } from "./styles";
import logoImg from "../../assets/img/kenzie-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link exact="true" to="/">
        <Logo src={logoImg}></Logo>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
