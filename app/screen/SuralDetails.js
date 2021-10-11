import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import quran from "../db/quran";
// import Sural from "../components/Sural";
import Verse from "../components/Verse";
import { Ionicons } from "@expo/vector-icons";

export default function SuralDetails({ navigation, route }) {
  const [surah, setSurah] = useState([]);
  const [load, setLoading] = useState(false);

  const { number, title } = route.params;

  const backToSuralList = () => navigation.navigate("Home");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleStyle: {
        color: "white",
        alignSelf: "center",
      },
      headerLeft: () => (
        <TouchableOpacity onPress={backToSuralList}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setLoading(true);
    const fetchDat = async () => {
      try {
        await setSurah(
          quran.filter((surah) => {
            return surah?.surah_id === number;
          })
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDat();
  }, []);

  const renderItem = useCallback(({ item }) => (
    <Verse
      verseId={item?.verse_id}
      verseArabic={item?.arabic}
      verseEng={item?.english}
      verseNote={item?.note}
    />
  ));

  const keyExtractor = useCallback(({ item }) => item?.verse_id.toString());
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.start}>
        {number === 1
          ? null
          : "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" && number === 9
          ? null
          : "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
      </Text>
      {load ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={surah}
          renderItem={renderItem}
          keyExtractor={(item) => item?.verse_id.toString()}
          // extraData={selectedId}
        />
      )}
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
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "700",
  },
});
