import React from "react";
import { Container, LogoContainer, MenuButtons, Logo } from "./style";
import LinkButton from "../linkButton/LinkButton";
import Image from "../../assets/images/logo_lacrei.svg";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={Image} alt="logo" />
      </LogoContainer>
      <MenuButtons>
        <LinkButton value="sobre" />
        <LinkButton value="contato" />
      </MenuButtons>
    </Container>
  );
};

export default Header;
