import React from "react";
import { Button, Container, Description, SubContainer, Title } from "./style";

interface Props {
  tema: string;
}

type Card = {
  id: string;
  assunto: string;
  descricao: string;
  url?: string;
};

const dataCard: Card[] = [
  {
    id: "0",
    assunto: "consultas",
    descricao: "Busque um atendimento agora mesmo.",
    url: "https://paciente.lacreisaude.com.br/",
  },
  {
    id: "1",
    assunto: "quem somos",
    descricao: "Conheça a Missão, Visão e Valores da Lacrei Saúde.",
    url: "https://lacreisaude.com.br/quem-somos/",
  },
  {
    id: "2",
    assunto: "ajuda",
    descricao:
      "Acesse nossa lista de perguntas frequentes e tire suas dúvidas.",
    url: "https://lacreisaude.com.br/ajuda/",
  },
];

const Card = ({ tema }: Props) => {
  const currentCard: Card | undefined = dataCard.find(
    (card) => card.assunto === tema
  );
  return (
    <Container key={currentCard?.id}>
      <SubContainer>
        <span className="material-symbols-outlined">settings</span>
      </SubContainer>

      <SubContainer>
        <Title>{currentCard?.assunto}</Title>
      </SubContainer>
      <SubContainer>
        <Description>{currentCard?.descricao}</Description>
      </SubContainer>
      <SubContainer>
        <Button target="_blank" href={`${currentCard?.url}`}>
          Acesse agora
        </Button>
      </SubContainer>
    </Container>
  );
};

export default Card;
