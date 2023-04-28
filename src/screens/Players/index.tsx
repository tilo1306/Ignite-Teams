import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight
        title="Nome da turma"
        subTitle="Adicione a falera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
