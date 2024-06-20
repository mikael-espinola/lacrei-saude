import React from "react";
import { Container, IconsContainer, Spance } from "./style";
import Image from "../../assets/images/logo_lacrei.svg";
import { Logo } from "../header/style";

const Footer = () => {
  return (
    <Container>
      <Spance>
        <Logo src={Image} alt="logo" />
        <IconsContainer>
          <h4 style={{ color: "red" }}>icon</h4>
          <h4 style={{ color: "red" }}>icon</h4>
          <h4 style={{ color: "red" }}>icon</h4>
          <h4 style={{ color: "red" }}>icon</h4>
        </IconsContainer>
      </Spance>
    </Container>
  );
};

export default Footer;
