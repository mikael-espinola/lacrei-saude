import React from "react";
import {
  Button,
  Container,
  Description,
  Icon,
  SubContainer,
  Title,
} from "./style";
interface Props {
  tema: string;
}

type Card = {
  id: string;
  assunto: string;
  descricao: string;
  url?: string;
  icon: string;
};

const dataCard: Card[] = [
  {
    id: "0",
    assunto: "consultas",
    descricao: "Busque um atendimento agora mesmo.",
    url: "https://paciente.lacreisaude.com.br/",
    icon: "stethoscope",
  },
  {
    id: "1",
    assunto: "quem somos",
    descricao: "Conheça a Missão, Visão e Valores da Lacrei Saúde.",
    url: "https://lacreisaude.com.br/quem-somos/",
    icon: "digital_wellbeing",
  },
  {
    id: "2",
    assunto: "ajuda",
    descricao:
      "Acesse nossa lista de perguntas frequentes e tire suas dúvidas.",
    url: "https://lacreisaude.com.br/ajuda/",
    icon: "help",
  },
];

const Card = ({ tema }: Props) => {
  const currentCard: Card | undefined = dataCard.find(
    (card) => card.assunto === tema
  );
  return (
    <Container key={currentCard?.id}>
      <SubContainer>
        <Icon $icon_color="#018762" $icon_size="56px">
          {currentCard?.icon}
        </Icon>
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
