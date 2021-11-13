import React, {useRef, useState} from "react";
import {Text, View, StyleSheet, TextInput, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../constants/palette";
import {Avatar, Switch} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-datepicker";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Picker} from "@react-native-picker/picker";
import {store} from "../../../redux/store";
import {updateUserProfile} from "../../../redux/slices/userSlice";

const EditProfileScreen = ({navigation}) => {
  const user = useSelector((state) => state?.user);
  const [firstName, setFirstName] = useState(user.userProfile.firstName);
  const [lastName, setLastName] = useState(user.userProfile.lastName);
  const [dateOfBirth, setDdateOfBirth] = useState(null);
  const [lastDonationDate, setLastDonationDate] = useState(null);
  const [bloodType, setBloodType] = useState("1");
  const [city, setCity] = useState("1");
  const [isSmoker, setIsSmoker] = useState(0);
  const [haveTattoo, setHavetattoo] = useState(0);
  const [smokerValue, setSmokerValue] = useState(false);
  const [haveTatooValue, setHaveTatooValue] = useState(false);
  const [image, setImage] = useState(
    "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg"
  );

  const Smoker = () => {
    setSmokerValue(!smokerValue);
    smokerValue ? setIsSmoker(0) : setIsSmoker(1);
  };
  const HaveTattoo = () => {
    setHaveTatooValue(!haveTatooValue);
    haveTatooValue ? setHavetattoo(0) : setHavetattoo(1);
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      setImage(result.uri);

      fetch("https://blood-center.tk/api/upload_image", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "bearer " + user.userProfile.token,
        }),
        body: JSON.stringify({profile_picture_url: result.base64}),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          navigation.navigate("ProfileScreen", {image: image});
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const Submit = () => {
    if (!dateOfBirth) {
      alert("Oops. you missed filing your date of birth");
    } else if (!lastDonationDate) {
      alert("Oops. you missed filing your last donation date");
    } else if (!bloodType) {
      alert("Oops. you missed filing your blood type");
    } else if (!city) {
      alert("Oops. you missed filing your city");
    } else {
      fetch("https://blood-center.tk/api/edit_user_info", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "bearer" + user.userProfile.token,
        }),
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          city_id: city,
          blood_type_id: bloodType,
          last_donation: lastDonationDate,
          is_smoker: isSmoker,
          have_tattoo: haveTattoo,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          store.dispatch(
            updateUserProfile({
              userProfile: {
                firstName: firstName,
                lastName: lastName,
                city_id: city,
              },
            })
          );
          navigation.goBack();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView>
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
              source={{uri: "https://blood-center.tk/storage/822kdtuWl7Mz.jpg"}}
              titleStyle={{}}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Profile picture</Text>
            <Text style={styles.status}>Long press to edit</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>First name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            placeholder={user.userProfile.firstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            placeholder={user.userProfile.lastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Date of birth</Text>
          <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{
              width: "100%",
            }}
            date={dateOfBirth}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            confirmBtnText="Chọn"
            cancelBtnText="Hủy"
            customStyles={{
              dateInput: {
                paddingRight: "74%",
                backgroundColor: colors.background,
                borderWidth: 1,
                borderColor: colors.white,
              },
            }}
            onDateChange={(dateOfBirth) => {
              setDdateOfBirth(dateOfBirth);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last donation date</Text>
          <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{
              width: "100%",
            }}
            date={lastDonationDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            confirmBtnText="Chọn"
            cancelBtnText="Hủy"
            customStyles={{
              dateInput: {
                paddingRight: "74%",
                backgroundColor: colors.background,
                borderWidth: 1,
                borderColor: colors.white,
              },
            }}
            onDateChange={(date) => {
              setLastDonationDate(date);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Select blood type</Text>
          <View style={styles.input}>
            <Picker
              ref={pickerRef}
              selectedValue={bloodType}
              onValueChange={(bloodType) => setBloodType(bloodType)}
            >
              <Picker.Item label="A+" value="1" />
              <Picker.Item label="A-" value="2" />
              <Picker.Item label="B+" value="3" />
              <Picker.Item label="B-" value="4" />
              <Picker.Item label="AB+" value="5" />
              <Picker.Item label="AB-" value="6" />
              <Picker.Item label="O+" value="7" />
              <Picker.Item label="O-" value="8" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Select city</Text>
          <View style={styles.input}>
            <Picker
              ref={pickerRef}
              selectedValue={city}
              onValueChange={(city) => setCity(city)}
              mode="dialog"
            >
              <Picker.Item label="Beirut" value="1" />
              <Picker.Item label="Tripoli" value="2" />
              <Picker.Item label="Saida" value="3" />
              <Picker.Item label="Byblos" value="4" />
              <Picker.Item label="Zahle" value="5" />
              <Picker.Item label="Tyre" value="6" />
              <Picker.Item label="Mount Lebanon" value="7" />
              <Picker.Item label="Baalbak" value="8" />
              <Picker.Item label="Baabda" value="9" />
              <Picker.Item label="Nabatieh" value="10" />
            </Picker>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.header}>Smoker</Text>
            </View>
          </View>
          <View>
            <Switch
              color="#2089dc"
              value={smokerValue}
              onValueChange={() => Smoker()}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.header}>Have a tattoo</Text>
            </View>
          </View>
          <View>
            <Switch
              color="#2089dc"
              value={haveTatooValue}
              onValueChange={() => HaveTattoo()}
            />
          </View>
        </View>
        <TouchableOpacity onPress={Submit}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logout}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: "15%",
  },
  nameContainer: {
    marginTop: "21%",
    marginRight: "34%",
  },
  name: {
    fontSize: 16,
  },
  status: {
    fontSize: 12,
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: colors.background,
  },
  inputContainer: {
    margin: "2%",
  },
  text: {
    fontSize: 14,
    marginLeft: "3%",
  },
  header: {
    fontSize: 14,
    padding: "2%",
    paddingLeft: "2%",
  },
  container: {
    backgroundColor: colors.background,
    marginTop: 10,
    padding: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    borderColor: colors.black,
  },
  logoutContainer: {
    backgroundColor: colors.green,
    marginTop: "20%",
    padding: 20,
    alignItems: "center",
  },
  logout: {
    fontSize: 24,
    color: colors.white,
  },
});

export default EditProfileScreen;
