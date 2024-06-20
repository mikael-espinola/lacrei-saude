"use client";

import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const Container = styled.div`
  display: flex;
  padding: 1.4em;
  padding: 1em;
  width: 100%;
  margin: 0 auto;
`;

export const Spance = styled.section`
  padding: 0.9em;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid green;
  border-top: 1px solid #018762;
  gap: 1em;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`;

export const IconsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
`;
