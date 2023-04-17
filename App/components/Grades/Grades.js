import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import classLogo from "../../assets/Group_211_y.png";
import styleSection from "../Sections/Section.Style";
import SearchBar from "../../screens/SearchBar";
import { StyleSheet } from "react-native";
import user from "../../assets/user.png";
import gradeLogo from "../../assets/Group_211_y.png";
import arrow from "../../assets/Group_158_a.png";
import { useNavigation } from "@react-navigation/native";
const Grades = () => {
  const navigation = useNavigation();
  return (
    <View style={styleSection.container}>
      <View style={styleSection.top}>
        <TouchableOpacity
          style={style.arrowStyle}
          onPress={() => navigation.navigate("Sections")}
        >
          <Image source={arrow} />
        </TouchableOpacity>
        <Text style={styleSection.userName}>Khatima Sajadi</Text>
        <View style={styleSection.imageWrapper}>
          <Image source={user} style={styleSection.img} />
        </View>
      </View>
      <View style={styleSection.middle}>
        <SearchBar />
      </View>

      <View style={style.bottom}>
        <View style={style.select}>
          <Text style={style.selectText}>صنف تان را انتخاب کنید</Text>
        </View>
        <TouchableOpacity
          style={style.grades}
          onPress={() => navigation.navigate("Books")}
        >
          <Text style={style.gradesText}>صنف اول</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.grades}
          onPress={() => navigation.navigate()}
        >
          <Text style={style.gradesText}>صنف دوم</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>صنف سوم</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>صنف چهارم</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>صنف پنجم</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.grades}>
          <Text style={style.gradesText}>صنف ششم</Text>
          <Image source={gradeLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  bottom: {
    // justifyContent: "center",
    alignItems: "center",
    height: "66%",
    backgroundColor: "#fff",
    width: "100%",
  },
  select: {
    backgroundColor: "rgba(60, 152, 189, 1)",
    width: "85%",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  selectText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  grades: {
    width: "85%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "rgba(212,228,232,1)",
    marginVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  gradesText: {
    color: "rgba(60, 152, 189, 1)",
    fontSize: 20,
  },
  arrowStyle: {
    marginBottom: "30%",
  },
});

export default Grades;
