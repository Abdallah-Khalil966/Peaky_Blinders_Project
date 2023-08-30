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
    name: "-%15",
    image: require("../assets/images/1.jpg"),
  },
  {
    id: 2,
    name: "-%19",
    image: require("../assets/images/2.jpg"),
  },
  {
    id: 3,
    name: "-%7",
    image: require("../assets/images/3.jpg"),
  },
  {
    id: 4,
    name: "",
    image: require("../assets/images/4.jpg"),
  },
  {
    id: 5,
    name: "-%3",
    image: require("../assets/images/5.png"),
  },
  {
    id: 6,
    name: "-%21",
    image: require("../assets/images/6.jpg"),
  },
  {
    id: 7,
    name: "-%12",
    image: require("../assets/images/7.png"),
  },
  {
    id: 8,
    name: "",
    image: require("../assets/images/8.jpg"),
  },
  {
    id: 9,
    name: "-%5",
    image: require("../assets/images/9.jpg"),
  },
  {
    id: 10,
    name: "-%5",
    image: require("../assets/images/10.jpg"),
  },
  {
    id: 11,
    name: "-%20",
    image: require("../assets/images/11.jpg"),
  },
  {
    id: 12,
    name: "",
    image: require("../assets/images/12.jpg"),
  },
  {
    id: 13,
    name: "-%6",
    image: require("../assets/images/13.jpg"),
  },
  {
    id: 14,
    name: "-%11",
    image: require("../assets/images/14.png"),
  },
  {
    id: 15,
    name: "-%15",
    image: require("../assets/images/15.jpg"),
  },
  {
    id: 16,
    name: "",
    image: require("../assets/images/16.jpg"),
  },
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    let outOfStockText = null;
    let imageStyle = styles.productImage;
    let overlayStyle = null;

    if ([8, 12, 4, 16].includes(item.id)) {
      outOfStockText = <Text style={styles.outOfStockText}>Out of Stock</Text>;
      imageStyle = styles.productImage;
      overlayStyle = styles.darkerOverlay;
    }

    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <View style={styles.productContainer}>
          <ImageBackground source={item.image} style={imageStyle}>
            <View style={styles.imageOverlay}>
              <View style={styles.ratings}>
                <Image
                  source={require("../assets/icons/rating.png")}
                  style={styles.ratingIcon}
                />
              </View>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={handleBuyPress}
              >
                <Image
                  source={require("../assets/icons/buy.png")}
                  style={styles.buyImage}
                />
              </TouchableOpacity>
              {outOfStockText}
            </View>
            <View style={[styles.overlay, overlayStyle]} />
          </ImageBackground>
          <Text style={styles.productName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleProductPress = (product) => {
    // Handle product press event
  };
  const handleBuyPress = (product) => {
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
          source={require("../assets/icons/Sales.png")}
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productList}>
            {products.map((item) => renderItem({ item }))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={styles.navBarButton}
        >
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
  outOfStockText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -55 }, { translateY: -15 }],
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  darkerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  imageFilter: {
    resizeMode: "cover",
    overlayColor: "rgba(0, 0, 0, 0.5)",
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
    width: 50,
    height: 70,
    resizeMode: "contain",
  },
  highlightedIcon: {
    tintColor: "#E5D27D",
  },
  highlightedIcon1: {
    tintColor: "white",
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
    width: 300,
    height: 500,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#3C3826",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buyButton: {
    position: "absolute",
    bottom: -15,
    right: 8,
  },
  buyImage: {
    width: 100,
    height: 100,
  },

  productName: {
    marginTop: 200,
    marginBottom: -5,
    right: 40,
    bottom: 60,
    fontWeight: "500",
    fontSize: 45,
    fontFamily: "Teko-Bold",
    color: "white",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "#3C3826",
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10,
  },
  ratings: {
    marginRight: 10,
    marginBottom: -80,
  },
  ratingIcon: {
    width: 400,
    height: 200,
    resizeMode: "contain",
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
