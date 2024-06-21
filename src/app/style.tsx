"use client";
import { breakpoints } from "@/components/style/patterns";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;
