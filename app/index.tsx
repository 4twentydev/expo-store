import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {Colors} from "@/constants/Colors";


const WelcomeScreen = () => {
  return (
      <>
      <Stack.Screen options={{headerShown: false}} />
          <ImageBackground source={require( '@/assets/images/splash.png')} style={{flex: 1}} resizeMode="center">
    <View style={styles.container}>
        <LinearGradient colors={["transparent", "rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1)"]} style={styles.background}>
          <View style={styles.wrapper}>
      <Text style={styles.title}>Shop</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text>Go to SignIn Screen.</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity>
          <Text>Go to SignUp Screen</Text>
        </TouchableOpacity>
      </Link>
          </View>
        </LinearGradient>
    </View>
          </ImageBackground>
      </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: "light",
    color: Colors.primary,
    marginBottom: 5,
    letterSpacing: 2.4,
  },
});
