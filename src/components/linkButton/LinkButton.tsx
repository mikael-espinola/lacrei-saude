"use client";
import React from "react";
import { Button, Text } from "./style";
import { useButtonProvider } from "@/contextApi/buttonContorls/ButtonControls";

interface Props {
  value: string;
}

const LinkButton = ({ value }: Props) => {
  const { isTrue } = useButtonProvider();

  return (
    <>
      {isTrue ? (
        <Button
          title="Veja as especialidades"
          href={`/${value}`}
          rel="noopener noreferrer"
        >
          <Text>{value}</Text>
        </Button>
      ) : (
        <Button
          title="Agende agora"
          href="https://paciente.lacreisaude.com.br/"
          rel="noopener noreferrer"
        >
          <Text>Agende agora</Text>
        </Button>
      )}
    </>
  );
};

export default LinkButton;
