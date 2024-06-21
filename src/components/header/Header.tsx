import React from "react";

import {
  Container,
  LogoContainer,
  MenuButtons,
  BackgroundContainer,
} from "./style";
import LinkButton from "../linkButton/LinkButton";
import Link from "next/link";
import Logo from "../logo/Logo";

import LogoLarge from "../../assets/images/logo-xl.svg";
import LogoIcon from "../../assets/images/logo-icon.svg";

const Header = () => {
  return (
    <BackgroundContainer>
      <Container>
        <LogoContainer>
          <Link href={"/"}>
            <Logo LogoLarge={LogoLarge} LogoSmall={LogoIcon} />
          </Link>
        </LogoContainer>
        <MenuButtons>
          <LinkButton value="especialidades" />
        </MenuButtons>
      </Container>
    </BackgroundContainer>
  );
};

export default Header;
