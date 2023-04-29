import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { Filter } from "@components/Filter";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [player, setPlayer] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subTitle="Adicione a galera e separe os times" />
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
      <FlatList
        data={player}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemover={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          player.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turme" type="SEGUNDARY" />
    </Container>
  );
}
