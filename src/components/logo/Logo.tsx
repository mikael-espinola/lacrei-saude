"use client";
import React from "react";
import { LogoImg } from "./style";
import { useMediaQuery } from "react-responsive";

interface Props {
  LogoSmall?: any;
  LogoLarge?: any;
}

const Logo = ({ LogoSmall, LogoLarge }: Props) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 612 });

  return <LogoImg src={isMobileScreen ? LogoSmall : LogoLarge} alt="logo" />;
};

export default Logo;
