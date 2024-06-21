"use client";
import React from "react";
import { LogoImg } from "./style";
import { useMediaQuery } from "react-responsive";

interface Props {
  LogoSmall?: any;
  LogoLarge?: any;
  IsHeader: boolean;
}

const Logo = ({ LogoSmall, LogoLarge, IsHeader }: Props) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 600 });

  return <LogoImg src={isMobileScreen ? LogoSmall : LogoLarge} alt="logo" />;
};

export default Logo;
