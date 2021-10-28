import {colors} from "../../constants/palette";
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, {useEffect, useState, useRef} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider} from "react-native-elements";
import {Picker} from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import SearchableDropdown from "react-native-searchable-dropdown";
import EmptyState from "../EmptyState";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const NewRequestComponent = ({ navigation }) => {

  const [city, setCity] = useState(null);
  const [hospital, setHospital] = useState(null);
  const [bloodType, setBloodType] = useState(null);
  const [numberOfUnits, setNumberOfUnits] = useState(null);
  const [expiryDate, setExpiryDate] = useState("2021-10-25");
  const user = useSelector((state) => state?.user);
  const pickerRef = useRef(); 

  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  
  const Submit = () => {
    fetch("https://blood-center.tk/api/make_request", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': "bearer " +  user.userProfile.token
      }),
      body: (JSON.stringify({
        blood_type: bloodType,
        hospital_id: hospital,
        city_id: city,
        number_of_units: numberOfUnits,
        expiry_date: expiryDate,
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
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.question}>What blood type do you need?</Text>
        </View>
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
      <View>
        <View>
          <Text style={styles.question}>Where are you?</Text>
        </View>
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
      <View>
        <Text style={styles.question}>Which hospital?</Text>
        <View style={styles.input}>
          <Picker
            ref={pickerRef}
            selectedValue={hospital}
            onValueChange={(hospital) => setHospital(hospital)}
          >
            <Picker.Item label="AUBMC" value="1" />
            <Picker.Item label="Cleamenceau" value="2" />
            <Picker.Item label="Najjar" value="3" />
            <Picker.Item label="Saida Hospital" value="4" />
            <Picker.Item label="Tripoli Hospital" value="5" />
            <Picker.Item label="Baalbak Hospital" value="6" />
            <Picker.Item label="Tyre Hospital" value="7" />
            <Picker.Item label="Mount Lebanon Hospital" value="8" />
            <Picker.Item label="Baabda Hospital" value="9" />
          </Picker>
        </View>
      </View>
      <View>
        <Text style={styles.question}>Request expiry date?</Text>
        <View style={styles.inputContainer}>
        <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{
              width: "100%",
            }}
            date={expiryDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            confirmBtnText="Chọn"
            cancelBtnText="Hủy"
            customStyles={{
              dateInput: {
                paddingRight: "68%",
                backgroundColor: colors.background,
                borderWidth: 1,
                borderColor: colors.white,
              },
            }}
            onDateChange={(date) => {
              setExpiryDate(date);  
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.question}>How many units?</Text>
        <View style={styles.input}>
        <TextInput
            // style={styles.input}
            onChangeText={setNumberOfUnits}
            value={numberOfUnits}
            placeholder="Enter number of units"
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity onPress={() =>Submit()}>
        <View style={styles.logoutContainer}>
          <Text style={styles.logout}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  question: {
    color: colors.primary_green,
    paddingLeft: 27,
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 20,
  },
  logoutContainer: {
    backgroundColor: colors.green,
    marginTop: "6%",
    padding: 20,
    alignItems: "center",
  },
  logout: {
    fontSize: 24,
    color: colors.white,
  },
  icon: {
    paddingTop: "25%",
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: colors.background,
    marginHorizontal: 15
  },
  inputContainer: {
    marginHorizontal: "4%",
  },
});

export default NewRequestComponent;
