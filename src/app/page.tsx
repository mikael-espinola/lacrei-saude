import Card from "@/components/card/Card";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <Card tema="consultas" />
      <Card tema="quem somos" />
      <Card tema="ajuda" />
    </Container>
  );
}
