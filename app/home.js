import { View, StyleSheet, Text } from "react-native";
import { theme } from "./_theme";
import MainImage from "./mainImage";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RuneScape Underworld!</Text>
      <View>
        <MainImage />
      </View>
      <Text style={styles.subtitle}>
        Please select an option from the sidebar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 22,
    fontFamily: "serif",
    color: theme.text,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "serif",
    color: theme.text,
  },
});

export default HomeScreen;
