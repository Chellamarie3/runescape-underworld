import {
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Text,
} from "react-native";
import { theme } from "./_theme";
import { useState } from "react";

const envelopePattern = /\(([^)]+)\)/;

const CharacterScreen = () => {
  const [text, setText] = useState("Enter a player name");
  const [result, setResult] = useState(undefined);

  const handleSubmit = (value) => {
    if (!value) return;
    fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${text}`)
      .then((res) =>
        res.json().then((json) => {
          console.log(json);
          setResult(json);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          onFocus={() => {
            setText("");
            setResult(undefined);
          }}
          onSubmitEditing={() => handleSubmit(text)}
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Button
          title="Search"
          onPress={() => handleSubmit(text)}
          color={theme.notification}
        ></Button>
      </View>
      <ScrollView>
        {result?.name && (
          <View id={result.name}>
            <Text style={{ color: theme.text }}>Name: {result.name}</Text>
            <Text style={{ color: theme.text }}>
              Level: {result.combatlevel}
            </Text>
            <Text style={{ color: theme.text }}>
              Completed Quests: {result.questscomplete}
            </Text>
            <Text style={{ color: theme.text }}>
              Total Skill: {result.totalskill}
            </Text>
            <Text style={{ color: theme.text }}>
              Total XP: {result.totalxp}
            </Text>
            <Text style={{ color: theme.text }}>Ranking: {result.rank}</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.background,
  },
  input: {
    backgroundColor: theme.border,
    borderRadius: 16,
    padding: 4,
    margin: 8,
    width: "80%",
    textAlign: "center",
    color: theme.text,
    borderWidth: 2,
    borderColor: theme.primary,
  },
});

export default CharacterScreen;
