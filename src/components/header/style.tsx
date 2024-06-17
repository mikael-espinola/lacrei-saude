"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.8em;
`;
export const MenuButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
export const LogoContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 0 2em;
`;

export const Logo = styled(Image)`
  width: 9em;
`;
