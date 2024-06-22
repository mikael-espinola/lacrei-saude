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
  border-radius: 8px;
  gap: 8px;
  background-color: ${(props) => props.theme.colors["$background-highlight"]};

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
  background: ${(props) => props.theme.colors["$gradient-lacrei"]};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  border: 2px solid ${(props) => props.theme.colors["$border-accent"]};
  text-decoration: none;
  color: ${(props) => props.theme.colors["$text-accent"]};
  transition: background-color 250ms;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors["$background-default"]};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${(props) => props.theme.colors["$background-accent"]};
    color: ${(props) => props.theme.colors["$text-invert"]};
    box-shadow: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 36px;
    font-size: 12px;
  }
`;

export const Icon = styled.span.attrs<Props>(() => ({
  className: "material-symbols-outlined",
}))`
  background: ${(props) => props.theme.colors["$gradient-lacrei"]};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: ${(props) => props.$icon_size};
`;
