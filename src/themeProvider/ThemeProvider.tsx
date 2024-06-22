"use client";
import { theme } from "@/components/style/patterns";
import React from "react";
import { ThemeProvider } from "styled-components";

const Provider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
