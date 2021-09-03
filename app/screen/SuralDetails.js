import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import HeaderBar from "../components/HeaderBar";
import quran from "../db/quran.json";

export default function SuralDetails({ navigation, route }) {
  const [surah, setSurah] = useState("");

  const { number, title } = route.params;

  const fetchingData = quran.filter((surah) => {
    return surah.surah_id === number;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });

    setSurah(fetchingData.map((surah) => surah.english).join());
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderBar message={surah} number={number} />
        <Text style={styles.start}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        {/* <Text style={styles.title}>Testing Testing</Text> */}
        <View style={styles.bodyContainer}>
          {fetchingData.map((surah, index) => (
            <Text key={index} style={styles.body}>
              ({surah.verse_id}) {surah.english}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: "100%",
  },
  start: {
    alignSelf: "flex-end",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 7,
  },

  body: {
    flex: 1,
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 30,
  },
});
