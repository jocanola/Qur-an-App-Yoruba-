import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function Sural({ number, title, arabic, navigation }) {
  const navigateToDetail = () =>
    navigation.navigate("SuralDetails", { number, title });
  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <ListItem key={number} bottomDivider>
        <Avatar
          rounded
          title={number}
          titleStyle={styles.avatarTitle}
          containerStyle={styles.avatar}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.textTitle}>{title}</ListItem.Title>
          {/* <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
        <Text style={styles.textStyle}>{arabic}</Text>
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#12afaf",
  },
  textStyle: {
    color: "#12afaf",
    fontSize: 20,
    fontWeight: "800",
  },
  avatarTitle: {
    color: "black",
    fontWeight: "800",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "black",
  },
});
