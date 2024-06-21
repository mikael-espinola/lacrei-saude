import React from "react";

import {
  Container,
  LogoContainer,
  MenuButtons,
  BackgroundContainer,
} from "./style";
import LinkButton from "../linkButton/LinkButton";
import LogoLarge from "../../assets/images/logo-xl.svg";
import LogoSmall from "../../assets/images/logo-assinatura.svg";
import Link from "next/link";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <BackgroundContainer>
      <Container>
        <LogoContainer>
          <Link href={"/"}>
            <Logo IsHeader={true} LogoLarge={LogoLarge} LogoSmall={LogoSmall} />
          </Link>
        </LogoContainer>
        <MenuButtons>
          <LinkButton value="sobre" />
        </MenuButtons>
      </Container>
    </BackgroundContainer>
  );
};

export default Header;
