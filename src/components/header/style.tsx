"use client";

import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.8em;
  background: linear-gradient(to bottom, #f5fffb, #ffffff);

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
export const MenuButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  padding-right: 3em;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 0 2em;
`;

export const Logo = styled(Image)`
  width: 9em;
  border: 2px solid red;
  @media (max-width: ${breakpoints.mobile}) {
  }
`;
