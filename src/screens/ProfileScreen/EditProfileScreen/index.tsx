import React, {useEffect, useRef, useState} from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../constants/palette";
import {Divider, Avatar, Switch, Button} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-datepicker";
import SearchableDropdown from "react-native-searchable-dropdown";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Picker} from "@react-native-picker/picker";
import { fonts } from "react-native-elements/dist/config";

const EditProfileScreen = (navigation: any) => {
  useEffect(() => {
    fetch("http://3.133.20.22/api/get_blood_types", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjEzMy4yMC4yMlwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNDkyNzI2NCwiZXhwIjoxNjM0OTYzMjY0LCJuYmYiOjE2MzQ5MjcyNjQsImp0aSI6InhLV3ZWZjd5ZHV0dENmYjIiLCJzdWIiOjUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.vowHK8d2dZlAhhV6brUNMSV8NP5hpxdXzQqIN2A03N0",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // setGetBloodTypes(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [dateOfBirth, setDdateOfBirth] = useState(new Date());
  const [lastDonationDate, setLastDonationDate] = useState(new Date());
  const [bloodType, setBloodType] = useState("");
  const [city, setCity] = useState("");
  const [text, onChangeText] = useState("");
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
    alert("Submitted!");
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
            onChangeText={onChangeText}
            placeholder={"First name"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Last name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
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
              onValueChange={(bloodType, itemIndex) => setBloodType(bloodType)}
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
              onValueChange={(city, itemIndex) => setCity(city)}
              mode="dialog"
            >
              {/* 1- Beirut
        2- Tripoli
        3- Saida
        4- Byblos
        5- Zahle
        6- Tyre
        7- Mount Lebanon
        8- Baalbak
        9- Baabda */}
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
