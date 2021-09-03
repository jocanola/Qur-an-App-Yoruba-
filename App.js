import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SuralList from "./app/screen/SuralList";
import Index from "./app/navigation/Index";
// import SuralList from './app/components/Sural';

export default function App() {
  return <Index />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
