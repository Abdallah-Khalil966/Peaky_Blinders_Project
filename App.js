import AppNavigation from "./navigation/appNavigation";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";


import react from "react";

export default function App() {
  const[Mode,setMode]= useState(false);
useEffect(() => {
let eventListener = EventRegister.addEventListener("changeThem",(data) => {
  setMode(data);
  console.log(data);
});
return () =>{
  EventRegister.removeEventListener(eventListener);
};
});

  const [fontsLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Teko-Bold": require("./assets/fonts/Teko-Bold.ttf"),
  });
  return (
<AppNavigation/>
  );
}

  
{/* <themeContext.Provider value={Mode === true ? theme.dark : theme.light} >
  <NavigationContainer>
    <AppNavigation/>
  </NavigationContainer>
  </themeContext.Provider> */}
