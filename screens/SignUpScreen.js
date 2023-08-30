import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isValidEmail = (email) => {
    const re =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
    return re.test(email);
  };

  const handleSignUp = async () => {
    console.log("Starting handleSignUp");
    console.log("username:", username);
    console.log("email:", email);
    console.log("password:", password);

    if (username.trim() === "") {
      alert("Please enter your full name");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    } else {
      try {
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);

        Alert.alert("Authentication", "Account has been registered successfully");
        // Clear form fields
        setUsername("");
        setEmail("");
        setPassword("");

        // Navigate to the home page or any other desired screen
        navigation.navigate("HomePage");
      } catch (error) {
        console.error("Error while signing up:", error);
      }
    }
  };
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/SignUp_Background.jpg")}
      blurRadius={1}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="#3C3826" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <View style={{ height: 120 }} />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: "transparent",
        }}
      >
        <View className="form space-y-2">
          <Text className="text-white ml-4">Full Name</Text>
          <TextInput
            style={{ backgroundColor: "white", color: "black" }}
            className="p-4 rounded-2xl mb-3"
            placeholder="Name"
            value={username}
            onChangeText={setUsername}
          />
          <Text className="text-white ml-4">Email Address</Text>
          <TextInput
            style={{ backgroundColor: "white", color: "black" }}
            className="p-4   rounded-2xl mb-3"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text className="text-white ml-4">Password</Text>
          <TextInput
            style={{ backgroundColor: "white", color: "black" }}
            className="p-4   rounded-2xl mb-7"
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{ backgroundColor: "#3C3826" }}
            className="py-3 rounded-xl"
            onPress={handleSignUp}
          >
            <Text className="font-xl font-bold text-center text-white">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-white font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-white font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
