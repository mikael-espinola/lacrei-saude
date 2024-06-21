"use client";

import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const BackgroundContainer = styled.div`
  background: linear-gradient(to bottom, #f5fffb, #ffffff);
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.4em;
  padding: 1.5em 0 0.5em 0;

  @media (min-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 0 auto;
    padding: 1.8em;
  }
`;
export const MenuButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {
    justify-content: start;
  }
`;

export const Logo = styled(Image)`
  width: 144px;
  height: 44px;
`;
