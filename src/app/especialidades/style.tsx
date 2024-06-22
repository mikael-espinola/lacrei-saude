"use client";
import { breakpoints } from "@/components/style/patterns";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6em;
  min-height: 50vh;
  padding: 0.4em;

  @media (min-width: ${breakpoints.mobile}) {
    margin: 0 auto;
    width: 85%;
  }
`;

export const Title = styled.h3`
  background: ${(props) => props.theme.colors["$gradient-lacrei"]};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
  text-align: center;
  padding: 0.4em;
  text-transform: capitalize;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8em;
  }
`;
