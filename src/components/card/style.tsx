"use client";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../style/patterns";

interface Props {
  $icon_color?: string;
  $icon_size?: string;
}

export const Container = styled.div`
  width: 18em;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 14em;
    height: 16em;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  padding: 0.5em;
`;

export const Title = styled.h2<Props>`
  color: #018762;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
`;

export const Description = styled.span`
  text-align: center;
  font-size: 12px;
  height: 3em;
  align-content: center;
`;

export const Button = styled(Link)`
  padding: 1em 3em;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #025621;
  text-decoration: none;
  color: green;
  transition: background-color 250ms ease;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #018765;
    color: #fff;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 36px;
    font-size: 12px;
  }
`;

export const Icon = styled.span.attrs<Props>(() => ({
  className: "material-symbols-outlined",
}))`
  color: ${(props) => props.$icon_color};
  font-size: ${(props) => props.$icon_size};
`;
