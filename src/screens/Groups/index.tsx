import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  async function handleNewGroup() {
    navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <HighLight title="Tumars" subTitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message=" Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
