import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "./HeaderBar";
import { useFonts } from "expo-font";
export default function Verse({ verseId, verseEng, verseArabic, verseNote }) {
  let [fontsLoaded] = useFonts({
    Roboto: require("../media/Roboto-Regular.ttf"),
    Uthmani: require("../media/Uthmani.otf"),
  });

  return (
    <View style={styles.bodyContainer}>
      <HeaderBar message={`${verseArabic} ${verseEng}`} number={verseId} />
      <Text
        style={{
          alignSelf: "flex-end",
          fontSize: 20,
          marginBottom: 5,
          textAlign: "right",
          fontWeight: "700",
          fontFamily: fontsLoaded ? "Roboto" : null,
        }}
      >
        {verseArabic}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          textAlign: "justify",
          lineHeight: 30,
          fontWeight: "600",
          fontFamily: fontsLoaded ? "Roboto" : null,
        }}
      >
        {verseEng}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          textAlign: "justify",
          lineHeight: 30,
          fontFamily: fontsLoaded ? "Roboto" : null,
        }}
      >
        {verseNote}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
