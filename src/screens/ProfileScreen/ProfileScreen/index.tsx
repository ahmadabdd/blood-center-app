import React, {useEffect, useState} from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
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
  const [image, setImage] = useState(null)
  const changeStatus = () => {
    setValue(!value);
    value ? setStatus("Unavailable") : setStatus("Available");
  };

  ;

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

  return (
    <View>
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
          <View style={styles.left}>
            <View>
              <Text style={styles.header}>{header}</Text>
            </View>
          </View>
          <View style={styles.right}>
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
      <NewRequestBottunComponent onPress={navigateNewRequest} />
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
    marginTop: "26%",
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
  header: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
  },
  left: {},
  right: {},
  icon: {
    paddingTop: 10,
  },
});
export default ProfileScreen;
