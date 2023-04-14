import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FirstPage from "./components/FirstPage/FirstPage";
import LogIn from "./components/LogIn/LogIn";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNaigator = () => {
  <NavigationContainer>
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={FirstPage}></Screen>
    </Navigator>
  </NavigationContainer>;
};
export default AppNaigator;
