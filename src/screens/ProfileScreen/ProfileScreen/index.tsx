import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import {colors} from "../../../constants/palette";
import {Avatar, Switch} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileButtonComponent from "../../../components/ProfileButtonComponent";
import * as ImagePicker from "expo-image-picker";
import {store} from "../../../redux/store";
import {deleteUser} from "../../../redux/slices/userSlice";

const DATA = [
  {
    id: "1",
    firstName: "Ahmad",
    lastName: "Abd",
    status: "2021-5-19",
    header: "2021-5-19",
    value: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
];

const ProfileScreen = ({ navigation }) => {
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

  useEffect(() => {
    //Change query. add is_available
    const DATA = [
      {
        first_name: "Ahmad",
        last_name: "Abd",
        email: "ahmad@gmail.com",
        profile_picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLGPNomfEy0pcUi86d1YbN7zVupY89ZZPtlC6uM4F3buwHw3KnQSQQBkS7ijYt1GEjDI&usqp=CAU",
        is_available: 1,
      },
    ];

    setFirstName(DATA[0].first_name);
    setLastName(DATA[0].last_name);
    setImage(DATA[0].profile_picture_url);
    setValue(DATA[0].is_available ? false : true);
  }, []);
  
  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [status, setStatus] = useState("Unvailable");
  const [value, setValue] = useState(false);
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
              source={
                image
                  ? {uri: image}
                  : {
                      uri: "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
                    }
              }
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
                <Text style={styles.header}>Availability</Text>
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
        <TouchableOpacity onPress={Logout}>
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
