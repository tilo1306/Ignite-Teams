import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
  onRemover: () => void;
};

export function PlayerCard({ name, onRemover }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemover} />
    </Container>
  );
}
