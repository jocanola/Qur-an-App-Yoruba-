import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SuralList from "../screen/SuralList";
import SuralDetails from "../screen/SuralDetails";

export default function Index() {
  const Stack = createStackNavigator();
  const globalHeaderStyle = {
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerStyle: { backgroundColor: "#12afaf" },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalHeaderStyle}>
        <Stack.Screen name="Home" component={SuralList} />
        <Stack.Screen
          name="SuralDetails"
          component={SuralDetails}
          //   options={{
          //     headerLeft:()=>
          //   }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
