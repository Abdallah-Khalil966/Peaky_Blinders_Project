import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomePage from "../screens/HomePage";
import Offers from "../screens/Offers";
import ProfilePage from "../screens/Profile";



const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="HomePage"
          options={{ headerShown: false }}
          component={HomePage}
        />
        <Stack.Screen
          name="Offers"
          options={{ headerShown: false }}
          component={Offers}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfilePage}
        />
      
       
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
