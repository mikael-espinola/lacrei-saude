"use client";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const Button = styled(Link)`
  background-color: ${(props) => props.theme.colors["$background-accent"]};
  border-radius: 8px;
  border-width: none;
  height: 48px;
  padding: 0.6em;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.3em;
    font-size: 12px;
  }
`;

export const Text = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors["$text-invert"]};
  text-transform: capitalize;
  padding: 0.3em;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;
