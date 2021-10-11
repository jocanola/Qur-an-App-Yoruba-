import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, Image, View } from "react-native";
import Sural from "../components/Sural";
import suralList from "../db/suralList.json";

export default function SuralList({ navigation }) {
  const [sural, setSural] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    try {
      const res = await suralList;
      setSural(res.chapters);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    setLoading(true);
    navigation.setOptions({
      title: "Al-Qur'an Kareem",
      headerTitleStyle: {
        color: "white",
        fontSize: 24,
      },
      // header: () => (
      //   <Image
      //     source={require("../media/quran.png")}
      //     style={{ width: 40, height: 40, margin: 5 }}
      //   />
      // ),
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
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
