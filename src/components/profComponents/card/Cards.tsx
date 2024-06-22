import React from "react";
import { Area, AreasContainer, Container, TextArea, Title } from "./style";
import { Icon } from "@/components/card/style";

interface Props {
  name: string;
  area?: string[];
  icon: string;
}

const ProfCard = () => {
  const profissoes: Props[] = [
    {
      name: "Clínica",
      icon: "stethoscope",
    },
    {
      name: "psicologia",
      icon: "psychology",
      area: ["psicanálise", "TCC"],
    },
    {
      name: "nutrição",
      icon: "nutrition",
      area: ["vegetariana", "vegana"],
    },
    {
      name: "psiquiatria",
      icon: "psychiatry",
    },
    {
      name: "odontologia",
      icon: "dentistry",
    },
    {
      name: "fisioterapia",
      icon: "nordic_walking",
    },
    {
      name: "infectologia",
      icon: "immunology",
    },
    {
      name: "ginecologia, obstetrícia ",
      icon: "female",
    },
    {
      name: "pediatria",
      icon: "child_care",
    },
    {
      name: "infectopediatria",
      icon: "immunology",
    },
  ];

  return (
    <>
      {profissoes.map((profissao: Props) => (
        <Container key={profissao.icon}>
          <Icon $icon_size="56px">{profissao.icon}</Icon>
          <Title>{profissao.name}</Title>
          <AreasContainer>
            {profissao?.area !== undefined && (
              <>
                <Area>Áreas:</Area>
                <TextArea>{profissao?.area?.join(", ")}</TextArea>
              </>
            )}
          </AreasContainer>
        </Container>
      ))}
    </>
  );
};

export default ProfCard;
