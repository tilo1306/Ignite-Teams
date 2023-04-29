import { useState } from "react";
import { groupsCreate } from "@storage/group/groupsCreate";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const { navigate } = useNavigation();

  async function handleNewGroup() {
    try {
      await groupsCreate(group);
      navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nova da Turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
