import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import Sural from "../components/Sural";
import suralList from "../db/suralList.json";

export default function SuralList({ navigation }) {
  const [sural, setSural] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    setLoading(true);
    try {
      const res = await suralList;
      setSural(res.chapters);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // api.quran.com/api/v4/chapters/%7Bchapter_id%7D/info?language=en
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Al Qur'an",
      headerLeft: () => (
        <Image
          source={require("../media/quran.png")}
          style={{ width: 40, height: 40, margin: 5 }}
        />
      ),
    });
    fetchingData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {loading ? <ActivityIndicator /> : null}
      </View>
    );
  }
  return (
    <ScrollView>
      {sural?.map(({ name_complex, id, subtitle, name_arabic }) => (
        <Sural
          key={id}
          number={id}
          title={name_complex}
          arabic={name_arabic}
          // subtitle={subtitle}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
