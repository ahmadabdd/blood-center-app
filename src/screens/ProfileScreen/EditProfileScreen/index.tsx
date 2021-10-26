import React, {useEffect, useRef, useState} from "react";
import {Text, View, StyleSheet, TextInput, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../constants/palette";
import { Avatar, Switch } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-datepicker";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Picker} from "@react-native-picker/picker";

const EditProfileScreen = ({ navigation }) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  const [id, setId] = useState(1);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dateOfBirth, setDdateOfBirth] = useState(null);
  const [lastDonationDate, setLastDonationDate] = useState(null);
  const [bloodType, setBloodType] = useState();
  const [city, setCity] = useState();
  const [isSmoker, setIsSmoker] = useState(0);
  const [haveTattoo, setHavetattoo] = useState(0);
  const [smokerValue, setSmokerValue] = useState(false);
  const [haveTatooValue, setHaveTatooValue] = useState(false);
  const [image, setImage] = useState(null);

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
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const Submit = () => {
    if (!firstName) {
      alert("Oops. you missed filing your first name");
    } else if (!lastName) {
      alert("Oops. you missed filing your last name");
    } else if (!dateOfBirth) {
      alert("Oops. you missed filing your date of birth");
    } else if (!lastDonationDate) {
      alert("Oops. you missed filing your last donation date");
    } else if (!bloodType) {
      alert("Oops. you missed filing your blood type");
    } else if (!city) {
      alert("Oops. you missed filing your city");
    } else {
      fetch("http://127.0.0.1:8000/api/edit_user_info", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: (JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        city_id: city,
        blood_type_id: bloodType,
        last_donation: lastDonationDate,
        is_smoker: isSmoker,
        have_tattoo: haveTattoo
      }))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
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
      <View style={styles.main}>
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
            <Text style={styles.name}>Profile picture</Text>
            <Text style={styles.status}>Long press to edit</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>First name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            placeholder={"First name"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            placeholder={"Last name"}
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
                // height: '130%'
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
  main: {
    // marginBottom: 50,
  },
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
