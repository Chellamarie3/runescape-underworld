import "react-native-gesture-handler";
import HomeScreen from "./app/home";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./app/_theme";
import CharacterScreen from "./app/character";

const Drawer = createDrawerNavigator();

const AppTheme = {
  dark: false,
  colors: theme,
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Character" component={CharacterScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
