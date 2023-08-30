import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const products = [
 
  {
    id: 1,
    name: "Coats",
    image: require("../assets/images/Coats.jpg"),
  },
  {
    id: 2,
    name: "Vests",
    image: require("../assets/images/Vests.jpg"),
  },
  {
    id: 3,
    name: "Hats",
    image: require("../assets/images/Hats.jpg"),
  },
  {
    id: 4,
    name: "Jackets",
    image: require("../assets/images/Jackets.jpg"),
  },
  {
    id: 5,
    name: "Dresses",
    image: require("../assets/images/Dresses.png"),
  },
  {
    id: 6,
    name: "Female tuxedos",
    image: require("../assets/images/Femaletuxedos.jpg"),
  },
  {
    id: 7,
    name: "Male tuxedos",
    image: require("../assets/images/Maletuxedos.jpg"),
  },
  {
    id: 8,
    name: "Accessories",
    image: require("../assets/images/Accessories.jpg"),
  },
 
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleProductPress = (product) => {
    // Handle product press event
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    // Handle search functionality
    console.log("Searching for:", searchText);
  };

  const handleVoiceRecognition = () => {
    // Handle voice recognition functionality
    console.log("Voice recognition activated");
  };

  return (
    <ImageBackground style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.Button}>
          <Image
            source={require("../assets/icons/settings.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>

        <Image
          source={require("../assets/icons/Logo.png")}
          style={[styles.Logo]}
        />

        <TouchableOpacity style={styles.Button}>
          <Image
            source={require("../assets/icons/Support.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearchTextChange}
          placeholder="Search..."
          placeholderTextColor="#CCCCCC"
        />
        <TouchableOpacity style={styles.Button} onPress={handleSearch}>
          <Image
            source={require("../assets/icons/Search.png")}
            style={[styles.icon, styles.shadow]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={handleVoiceRecognition}
        >
          <Image
            source={require("../assets/icons/Microphone.png")}
            style={[styles.icon, styles.shadow]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productList}>
            {products.map((item) => renderItem({ item }))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton}>
          <Image
            source={require("../assets/icons/Home.png")}
            style={[styles.icon, styles.highlightedIcon1, styles.shadow]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Offers")}
          style={styles.navBarButton}
        >
          <Image
            source={require("../assets/icons/Offers.png")}
            style={[styles.icon, styles.highlightedIcon, styles.shadow]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.navBarButton}
        >
          <Image
            source={require("../assets/icons/Profile.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 80,
  },
  navBar: {
    backgroundColor: "#3C3826",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  navBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  Logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  highlightedIcon: {
    tintColor: "white",
  },
  highlightedIcon1: {
    tintColor: "#E5D27D",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 9,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#3C3826",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  productList: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  productContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 8,
    padding: 0,
    alignItems: "center",
  },
  productImage: {
    width: 355,
    height: 510,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#3C3826",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productName: {
    marginTop: 210,
    marginBottom: -5,
    fontWeight: "500",
    fontSize: 50,
    fontFamily: "Teko-Bold",
    color: "white",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "#3C3826",
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 22,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  Button: {
    padding: 8,
  },
});

export default HomeScreen;
