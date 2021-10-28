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

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state?.user);
  const NavigateHealthRecord = (id) => {
    navigation.navigate("HealthRecordScreen", { user_id: id});
  };

  const navigateMyDonations = () => {
    navigation.navigate("MyDonationsScreen");
  };

  const navigateEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };
  

  useEffect(() => {
    setId(user.userProfile.id);
    setFirstName(user.userProfile.firstName);
    setLastName(user.userProfile.lastName);
    setImage(user.userProfile.profile_picture_url);
    setValue(user.userProfile.is_available ? true : false);
    value ? setStatus('Avaliable') : setStatus('Unavaliable')
    console.log(value)
  }, [user.userProfile.firstName]);
  
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [status, setStatus] = useState(null);
  const [value, setValue] = useState(true);
  const [image, setImage] = useState(null);

  const changeStatus = () => {
    setValue(!value);
    if(!value) {
      fetch("https://blood-center.tk/api/set_available", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setStatus('Available')
      })
      .catch((error) => {
        console.error(error);
      });
    } 
    if(value) {
      fetch("https://blood-center.tk/api/set_unavailable", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setStatus('Unavailable')
      })
      .catch((error) => {
        console.error(error);
      });
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
              // onLongPress={pickImage}
              // onPress={() => alert("Long press to edit!")}
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
            onPress={() => NavigateHealthRecord(id)}
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
            <View>
              <View>
                <Text style={styles.logout}>Log out</Text>
              </View>
            </View>
            <View>
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
