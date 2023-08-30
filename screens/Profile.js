import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Gender = [
  { gender: "Male", value: "Male" },
  { gender: "Female", value: "Female" },
];

const ProfilePage = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState("Select gender");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(Gender);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isProfileChanged, setIsProfileChanged] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Load profile data from AsyncStorage when the component mounts
    loadProfileData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        setUsername(storedUsername);
        const storedEmail = await AsyncStorage.getItem("email");
        setEmail(storedEmail);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const loadProfileData = async () => {
    try {
      // Retrieve the saved profile data from AsyncStorage
      const profileData = await AsyncStorage.getItem("profileData");
      if (profileData) {
        const { selectedGender, dateOfBirth } = JSON.parse(profileData);
        setSelectedGender(selectedGender);
        setDateOfBirth(new Date(dateOfBirth));
      }
    } catch (error) {
      console.log("Error loading profile data:", error);
    }
  };

  const saveProfileData = async () => {
    try {
      // Save the changes to AsyncStorage
      const profileData = JSON.stringify({
        selectedGender,
        dateOfBirth: dateOfBirth.toISOString(),
      });
      await AsyncStorage.setItem("profileData", profileData);
      console.log("Profile changes saved:", {
        selectedGender,
        dateOfBirth: dateOfBirth.toISOString(),
      });
      setIsProfileChanged(true); // Set the flag to display the profile changed message
    } catch (error) {
      console.log("Error saving profile data:", error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
    setIsProfileChanged(true);
  };

  const handleSave = () => {
    saveProfileData();
    setIsProfileChanged(false);
    navigation.goBack();
    Alert.alert("Profile", "Changes Saved");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/left-arrow.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.signOutButton}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.saveText} onPress={handleSave}>
          Save
        </Text>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/icons/Profile.png")}
            style={[styles.Profile]}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Username</Text>
        </View>
        <Text style={styles.Text}>{username}</Text>
        <View style={styles.line} />

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email</Text>
        </View>
        <Text style={styles.Text}>{email}</Text>
        <View style={styles.line} />

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Gender</Text>
        </View>
        <View style={styles.containarGender}>
          <TouchableOpacity
            style={styles.dropdownSelector}
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text style={styles.TextGender}>{selectedGender}</Text>
            {isClicked ? (
              <Image
                source={require("../assets/icons/upload.png")}
                style={styles.iconGenderBox}
              />
            ) : (
              <Image
                source={require("../assets/icons/dropdown.png")}
                style={styles.iconGenderBox}
              />
            )}
          </TouchableOpacity>
          {isClicked ? (
            <View style={styles.dropdownArea}>
              <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={styles.containarItem}
                      onPress={() => {
                        setSelectedGender(item.gender);
                        setIsClicked(false);
                      }}
                    >
                      <Text>{item.gender}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        <View style={styles.line} />

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Date Of Birth</Text>
        </View>
        <TouchableOpacity
          style={styles.Text}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.TextDate}>{dateOfBirth.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <View style={styles.line} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Image
            source={require("../assets/icons/Home.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Offers")}>
          <Image
            source={require("../assets/icons/Offers.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/icons/Profile.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    backgroundColor: "#3C3826",
    padding: 110,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "light",
    color: "white",
    top: -85,
    right: -29,
  },
  labelContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "gray",
    top: 15,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 25,
  },
  Text: {
    fontSize: 18,
    color: "white",
    top: 5,
  },
  signOutButton: {
    backgroundColor: "#191919",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    position: "absolute",
    top: 203,
    right: 161,
  },
  signOutText: {
    fontSize: 15,
    color: "white",
  },
  saveText: {
    fontSize: 15,
    color: "white",
    top: -86,
    left: 90,
  },
  icon: {
    position: "absolute",
    marginRight: 8,
    top: -100,
    right: 60,
    height: 34,
    width: 34,
    tintColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "#191919",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  footer: {
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
  profileContainer: {
    position: "absolute",
    top: 65,
    right: 136,
  },
  Profile: {
    height: 130,
    width: 130,
  },
  footerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  containarGender: {},

  headingGender: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 100,
    alignSelf: "center",
  },
  TextGender: {
    color: "white",
    fontSize: 15,
  },
  dropdownSelector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    marginTop: 8,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconGenderBox: {
    width: 20,
    height: 20,
  },
  dropdownArea: {
    width: "85%",
    height: 88,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
    marginTop: 6,
  },
  containarItem: {
    marginTop: 5,
    width: "85%",
    height: 40,
    borderBottomWidth: 0.3,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
  },
  TextDate: {
    color: "white",
    fontSize: 15,
  },
});

export default ProfilePage;
