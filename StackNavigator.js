import React from "react";

import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./App/components/FirstPage/FirstPage";
import LogIn from "./App/components/LogIn/LogIn";
import SignUp from "./App/components/SignUp/SignUp";
import Sections from "./App/components/Sections/Sections";
import Primary from "./App/components/Sections/Primary/Primary";
import GradeFirst from "./App/components/Sections/Primary/Grade_first/Grade_first";
import Dari_1st from "./App/components/Sections/Primary/Grade_first/Dari_subject/Dari_1st";

const Stack = createNativeStackNavigator();
const StackNaigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="FirstPage"
    >
      <Stack.Group>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="Primary" component={Primary} />
        <Stack.Screen name="GradeFirst" component={GradeFirst} />
        <Stack.Screen name="Dari_1st" component={Dari_1st} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNaigator;
