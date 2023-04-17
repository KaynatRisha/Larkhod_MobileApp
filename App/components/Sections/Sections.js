import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import user from "../../assets/user.png";
import styles from "./Section.Style";
import White from "../../assets/background.png";
import primary from "../../assets/primary.png";
import secondary from "../../assets/secondary.png";
import high from "../../assets/high.png";
import SeatchBar from "../../screens/SearchBar";
import { useNavigation } from "@react-navigation/native";

const Sections = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.userName}>Khatima Sajadi</Text>
        <View style={styles.imageWrapper}>
          <Image source={user} style={styles.img} />
        </View>
      </View>
      <View style={styles.middle}>
        <SeatchBar />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate("Grades")}
        >
          <Text style={styles.btnText}>بخش ابتداییه</Text>
          <Image source={primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate()}
        >
          <Text style={styles.btnText}>بخش متوسطه</Text>
          <Image source={secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate()}
        >
          <Text style={styles.btnText}>بخش لیسه</Text>
          <Image source={high} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sections;
