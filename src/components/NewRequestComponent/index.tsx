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
import SearchableDropdown from "react-native-searchable-dropdown";

const NewRequestComponent = () => {

  useEffect(() => {
    fetch("https://aboutreact.herokuapp.com/demosearchables.php")
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [serverData, setServerData] = useState([]);
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodType, setBloodType] = useState('');
  const pickerRef = useRef();

  const Submit = () => {
    Alert.alert("Submitted!");
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.question}>What blood type do you need?</Text>
        </View>
        <View>
        <SearchableDropdown
        // onTextChange={(item) => console.log(JSON.stringify(item))}
        onItemSelect={(item) => setBloodType(item.name)}
        containerStyle={{
          marginLeft: 25,
          marginRight: 25,
          backgroundColor: colors.white
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: colors.white,
          backgroundColor: colors.background,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: colors.background,
          borderColor: "#bbb",
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: colors.black,
        }}
        itemsContainerStyle={{
          maxHeight: "60%",
        }}
        items={serverData}
        defaultIndex={2}
        placeholder={bloodType ? bloodType : "Select blood type"}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
        </View>
      </View>
      <View>
      <View>
        <Text style={styles.question}>Where are you?</Text>
      </View>
      <SearchableDropdown
        ref={pickerRef}
        // onTextChange={(item) => console.log(JSON.stringify(item))}
        onItemSelect={(item) => setCity(item.name)}
        containerStyle={{
          marginLeft: 25,
          marginRight: 25,
          backgroundColor: colors.white
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: colors.white,
          backgroundColor: colors.background,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: colors.background,
          borderColor: "#bbb",
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: colors.black,
        }}
        itemsContainerStyle={{
          maxHeight: "60%",
        }}
        items={serverData}
        defaultIndex={2}
        placeholder={city ? city : "Select City"}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
      </View>
      <View>
        <Text style={styles.question}>Which hospital?</Text>
        <SearchableDropdown
        ref={pickerRef}
        // onTextChange={(item) => console.log(JSON.stringify(item))}
        onItemSelect={(item) => setHospital(item.name)}
        containerStyle={{
          marginLeft: 25,
          marginRight: 25,
          backgroundColor: colors.white
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: colors.white,
          backgroundColor: colors.background,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: colors.background,
          borderColor: "#bbb",
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: colors.black,
        }}
        itemsContainerStyle={{
          maxHeight: "60%",
        }}
        items={serverData}
        defaultIndex={2}
        placeholder={hospital ? hospital : "Select hospital"}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
      </View>
      <TouchableOpacity onPress={Submit}>
        <View style={styles.logoutContainer}>
          <Text style={styles.logout}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
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
    marginTop: "53%",
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
});

export default NewRequestComponent;
