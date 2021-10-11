import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { useFonts } from "expo-font";

export default function Sural({ number, title, arabic, navigation }) {
  let [fontsLoaded] = useFonts({
    Uthmani: require("../media/Uthmani.otf"),
  });

  const navigateToDetail = () =>
    navigation.navigate("SuralDetails", { number, title });
  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <ListItem key={number} bottomDivider>
        <Avatar
          rounded
          title={number}
          titleStyle={{ color: "black", fontWeight: "800" }}
          containerStyle={{ backgroundColor: "#00AB9B" }}
        />
        <ListItem.Content>
          <ListItem.Title
            style={{
              color: "#12afaf",
              fontSize: 20,
              fontWeight: "800",
              fontFamily: fontsLoaded ? "Uthmani" : null,
            }}
          >
            {title}
          </ListItem.Title>
        </ListItem.Content>
        <Text
          style={{
            color: "#12afaf",
            fontSize: 20,
            fontWeight: "800",
            fontFamily: fontsLoaded ? "Uthmani" : null,
          }}
        >
          {arabic}
        </Text>
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
