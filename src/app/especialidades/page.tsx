import React from "react";
import { Container, Title } from "./style";
import ProfCard from "@/components/profComponents/card/Cards";

const Especialidades = () => {
  return (
    <div>
      <Container>
        <Title>especialidades disponíveis</Title>
        <ProfCard />
      </Container>
    </div>
  );
};

export default Especialidades;
