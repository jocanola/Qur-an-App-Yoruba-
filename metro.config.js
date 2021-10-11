// const { getDefaultConfig } = require("expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   resolver: {
//     assetExts: [...defaultConfig.resolver.assetExts, "db"],
//   },
// };


// import React, { useEffect, useLayoutEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import HeaderBar from "../components/HeaderBar";
// import quran from "../db/quran";
// // import Sural from "../components/Sural";
// import Verse from "../components/Verse";

// export default function SuralDetails({ navigation, route }) {
//   const [surah, setSurah] = useState([]);
//   const [load, setLoading] = useState(false);

//   const { number, title } = route.params;

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: title,
//     });
//   }, [navigation]);
// const fetchDat = async () => {
//       try {
//         await setSurah(
//           quran.filter((surah) => {
//             return surah?.surah_id === number;
//           })
//         );
//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchDat();
//   }, [])
//   // setTimeout(() => {}, 3000);
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.start}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
//       {load ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           <FlatList
//             data={surah}
//             renderItem={(item) => (
//               <Verse
//                 // key={item.verse_id}
//                 verseId={item?.verse_id}
//                 verseArabic={item?.arabic}
//                 verseEng={item?.english}
//                 verseNote={item?.note}
//               />
//             )}
//             keyExtractor={(item) => item.id}
//             // extraData={selectedId}
//           />
//           {/* {surah.map((surah) => (
//               <Verse
//                 key={surah.verse_id}
//                 verseId={surah?.verse_id}
//                 verseArabic={surah?.arabic}
//                 verseEng={surah?.english}
//                 verseNote={surah?.note}
//               />
//             ))} */}
//           <Text>Testing</Text>
//           {console.log(surah)}
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 10,
//     marginVertical: 5,
//     height: "100%",
//   },
//   start: {
//     alignSelf: "center",
//     fontSize: 20,
//     marginBottom: 5,
//     fontWeight: "700",
//   },
// });

