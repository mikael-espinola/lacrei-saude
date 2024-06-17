import { Container } from "./style";
import LinkButton from "@/components/linkButton/LinkButton";

export default function Home() {
  return (
    <Container>
      <LinkButton value="sobre" />
      <LinkButton value="contato" />
    </Container>
  );
}
