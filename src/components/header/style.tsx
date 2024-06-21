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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.8em;
  width: 90%;
  margin: 0 auto;
`;
export const MenuButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
`;
export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const Logo = styled(Image)`
  width: 144px;
  height: 44px;
  @media (max-width: ${breakpoints.mobile}) {
  }
`;
