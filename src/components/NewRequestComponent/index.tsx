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

  const [city, setCity] = useState('1');
  const [hospital, setHospital] = useState('1');
  const [bloodType, setBloodType] = useState('1');
  const [numberOfUnits, setNumberOfUnits] = useState(1);
  const [expiryDate, setExpiryDate] = useState(null);
  const user = useSelector((state) => state?.user);
  const pickerRef = useRef(); 

  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  
  const dateValidate = (date) => {
    let isValid = true;
    let expiryDate = new Date(Number(date[0]), Number(date[1]), Number(date[2]));
    let vectorCurrentDate = getCurrentDate();
    let currentDate = new Date(vectorCurrentDate[2], vectorCurrentDate[1], vectorCurrentDate[0]);
    console.log(expiryDate)
    console.log(currentDate)
    if(currentDate > expiryDate){
      isValid = false;
    }
    return isValid;
  }

  const getCurrentDate = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    day = day < 10 ? Number(`0${day}`) : day;
    month = month < 10 ? Number(`0${month}`) : month;
    return [day, month, year]
  }

  const Submit = () => {
    if(bloodType && city && hospital && expiryDate) {
      if(dateValidate(expiryDate.split('-'))){
        if(numberOfUnits > 0) {
          console.log(expiryDate)
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
        } else {
          alert("Number of units can't be zero")
        }
      }else{
        alert('Date should be in the future')
      }
    } else {
      alert('Please fill all the needed data')
    }
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
            <Picker.Item label="Nabatieh" value="10" />
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
            <Picker.Item label="Najjar Hospital" value="3" />
            <Picker.Item label="Trad Hospital" value="4" />
            <Picker.Item label="St. Georges Hospital" value="5" />
            <Picker.Item label="Rizk Hospital" value="6" />
            <Picker.Item label="Rafic Hariri Hospital" value="7" />
            <Picker.Item label="Saida Hospital" value="8" />
            <Picker.Item label="Tripoli Hospital" value="9" />
            <Picker.Item label="Haykal Hospital" value="10" />
            <Picker.Item label="Al Salam Hospital" value="11" />
            <Picker.Item label="Baalbak Hospital" value="12" />
            <Picker.Item label="Hiram Hospital" value="13" />
            <Picker.Item label="Mount Lebanon Hospital" value="14" />
            <Picker.Item label="Bchamoun Hospital" value="15" />
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
