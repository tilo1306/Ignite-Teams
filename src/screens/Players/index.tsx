import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Filter } from "@components/Filter";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [player, setPlayer] = useState([]);

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
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title="item"
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{player.length}</NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}
