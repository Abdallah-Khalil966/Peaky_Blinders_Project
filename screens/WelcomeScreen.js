import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/Welcome_Background.jpg")}
      blurRadius={1}
      style={[styles.container]}
    >
      <View style={styles.main}>
        <Text style={styles.title}>Let's Get Started!</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginButtonText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "space-around",
    marginVertical: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 500,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 500,
    width: 350,
    borderRadius: 8,
  },
  buttons: {
    marginHorizontal: 28,
  },
  signUpButton: {
    paddingVertical: 12,
    backgroundColor: "black",
    borderRadius: 9999,
    marginBottom: 16,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "600",
  },
  loginButtonText: {
    fontWeight: "600",
    color: "#F59E0B",
  },
});
