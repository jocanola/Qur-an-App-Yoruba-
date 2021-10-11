import React from "react";
import { StyleSheet, Share, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function HeaderBar({ message, number }) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        title={number}
        titleStyle={styles.avatarTitle}
        containerStyle={styles.avatar}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={onShare}>
          <Entypo name="share" size={34} color="#A8E1DC" />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <FontAwesome name="bookmark-o" size={34} color="#A8E1DC" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  subContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarTitle: {
    color: "black",
    fontWeight: "800",
  },
  avatar: {
    borderRadius: 999,
    borderWidth: 3,
    borderStyle: "dotted",
    width: 40,
  },
});
