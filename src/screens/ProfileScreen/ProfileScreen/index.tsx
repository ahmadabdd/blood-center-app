import React, {useEffect, useState} from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import {Divider, Avatar, Switch} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileButtonComponent from "../../../components/ProfileButtonComponent";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import * as ImagePicker from "expo-image-picker";
import {Constants} from "expo-constants";
import { store } from "../../../redux/store";
import { deleteUser } from "../../../redux/slices/userSlice";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const NavigateHealthRecord = () => {
    navigation.navigate("HealthRecordScreen");
  };
  const navigateMyDonations = () => {
    navigation.navigate("MyDonationsScreen");
  };
  const navigateEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [status, setStatus] = useState("Available");
  const [header, setHeader] = useState("Availability");
  const [value, setValue] = React.useState(true);
  const [image, setImage] = useState(null);
  const changeStatus = () => {
    setValue(!value);
    value ? setStatus("Unavailable") : setStatus("Available");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const Logout = () => {
    store.dispatch(deleteUser());
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.headContainer}>
          <View style={styles.avatar}>
            <Avatar
              activeOpacity={0.2}
              avatarStyle={{}}
              containerStyle={{backgroundColor: colors.text}}
              iconStyle={{}}
              imageProps={{}}
              onLongPress={pickImage}
              onPress={() => alert("Long press to edit!")}
              overlayContainerStyle={{}}
              placeholderStyle={{}}
              rounded
              size="large"
              source={{uri: image}}
              titleStyle={{}}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.container}>
            <View>
              <View>
                <Text style={styles.header}>{header}</Text>
              </View>
            </View>
            <View>
              <Switch
                color="#2089dc"
                value={value}
                onValueChange={() => changeStatus()}
              />
            </View>
          </View>

          <ProfileButtonComponent
            header="Health record"
            onPress={NavigateHealthRecord}
          />
          <ProfileButtonComponent
            header="My donations"
            onPress={navigateMyDonations}
          />
          <ProfileButtonComponent
            header="Edit profile"
            onPress={navigateEditProfile}
          />
        </View>
        <TouchableOpacity
          onPress={Logout} 
        >
          <View style={styles.logoutContainer}>
            <View style={styles.left}>
              <View>
                <Text style={styles.logout}>Log out</Text>
              </View>
            </View>
            <View style={styles.right}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name={"logout"}
                  size={25}
                  color={colors.white}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginLeft: "10%",
    marginTop: "15%",
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "10%",
    marginTop: "2%",
  },
  nameContainer: {
    marginTop: "18%",
    marginRight: "25%",
  },
  body: {
    marginTop: "15%",
  },
  name: {
    fontSize: 25,
  },
  status: {
    fontSize: 14,
  },
  container: {
    backgroundColor: colors.background,
    marginTop: 2,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    borderRadius: 10,
  },
  logoutContainer: {
    backgroundColor: colors.red,
    marginTop: 2,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
  },
  logout: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
    color: colors.white,
  },
  icon: {
    paddingTop: "25%",
  },
});
export default ProfileScreen;
