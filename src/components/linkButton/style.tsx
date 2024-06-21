"use client";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

export const Button = styled(Link)`
  background-color: #018765;
  border-radius: 8px;
  border-width: none;
  height: 48px;
  padding: 0.6em;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 2em;

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 40%;
  }
`;
