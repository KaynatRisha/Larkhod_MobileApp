import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./SignUp.style";
import logo from "../../assets/White_PNG_Format_z.png";
import styles from "../SignUp/SignUp.style";

const SignUp = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [repeatPassWord, setRepeatPassWord] = useState("null");
  const submit = () => {
    if (
      userName === "" ||
      Email === "" ||
      passWord == "" ||
      repeatPassWord === ""
    ) {
      Alert.alert("لطفاً معلومات خود را مکمل  کنید");
    } else {
      navigation.navigate("Sections");
    }
  };
  return (
    <SafeAreaView style={Styles.outContainer}>
      <Image source={logo} style={Styles.imgStyle} />
      <View style={Styles.InContainer}>
        <View style={styles.navContainer}>
          <Pressable style={styles.btnSI}>
            <Text style={styles.btnTextSI}>ورود به حساب</Text>
          </Pressable>
          <Pressable style={styles.btnSO}>
            <Text style={styles.btnTextSO}>ایجاد حساب</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="نام کاربری"
            onChangeText={(value) => {
              setUserName(value);
            }}
            style={styles.input}
            textContentType="username"
          />
          <Text id="username"></Text>
          <TextInput
            placeholder="ایمیل آدرس"
            onChangeText={(value) => {
              setEmail(value);
            }}
            style={styles.input}
            textContentType="emailAddress"
          />
          <TextInput
            placeholder="رمز عبور"
            onChangeText={(value) => {
              setPassword(value);
            }}
            style={styles.input}
            textContentType="password"
          />
          <TextInput
            placeholder="تکرار رمز عبور"
            style={styles.input}
            onChange={(value) => {
              setRepeatPassWord(value);
            }}
            textContentType="password"
          />
          <Pressable style={styles.submitBtn} onPress={submit}>
            <Text style={styles.submitText}>ایجاد حساب</Text>
          </Pressable>
        </View>

        <Text style={{ color: "lightgray" }}>
          _______________ویا_______________
        </Text>
        <View style={styles.linkedBtnWrapper}>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={google} />
            <Text style={styles.linkBtnText}>با حساب گوگل خود وارد شوید</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBtn}>
            <Image source={facebook} />
            <Text style={styles.linkBtnText}>با حساب فیسبوک خود وارد شوید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
