"use client";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 12em;
  width: 14em;
  border-radius: 8px;
  padding: 0.8em;
  background-color: ${(props) => props.theme.colors["$background-highlight"]};

  @media (max-width: 470px) {
    width: 75%;
  }
`;

export const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  margin: 1em;
  background: ${(props) => props.theme.colors["$gradient-lacrei"]};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const AreasContainer = styled.section`
  display: flex;
`;
export const Area = styled.h5`
  margin-right: 1em;
  color: ${(props) => props.theme.colors["$text-body"]};
`;
export const TextArea = styled.span`
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors["$text-body"]};
`;
