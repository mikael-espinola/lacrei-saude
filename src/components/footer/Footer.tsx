import React from "react";
import { Container, IconsContainer, Spance } from "./style";
import LogoSmall from "../../assets/images/logo-large-vertical.svg";
import LogoLarge from "../../assets/images/logo-xl.svg";
import { LogoContainer } from "../header/style";

import Icons from "./Icons/Icons";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <Container>
      <Spance>
        <LogoContainer>
          <Logo LogoLarge={LogoLarge} LogoSmall={LogoSmall} />
        </LogoContainer>
        <IconsContainer>
          <Icons />
        </IconsContainer>
      </Spance>
    </Container>
  );
};

export default Footer;
