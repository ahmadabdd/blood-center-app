import React, {useEffect, useRef, useState} from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Button
} from "react-native";
import {useSelector} from "react-redux";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import ListComponentMain from "../../../components/ListComponentMain";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import {Picker} from "@react-native-picker/picker";
import _ from 'lodash';
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState();
  const [bloodType, setBloodType] = useState();
  const [originalRequests, setOriginalRequests] = useState();
  const [requests, setRequests] = useState();
  console.log(bloodType)
  console.log(city)

  const user = useSelector((state) => state?.user);

  const filterRrequestsByCity = (city) => {
    setCity(city)
    setRequests(_.filter(originalRequests, request => request.city == city)) 
  }

  const filterRrequestsByBloodType= (bloodType) => {
    setBloodType(bloodType)
    setRequests(_.filter(originalRequests, request => request.type == bloodType)) 
  }

  const reset = () => {
    setRequests(originalRequests)
  }

  useEffect(() => {
    fetch("https://blood-center.tk/api/get_all_requests", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
      }),
      body: (
        city ? JSON.stringify({city: city}) : ''  
      )
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setRequests(responseJson);
        setOriginalRequests(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigateRequestView = (id) => {
    navigation.navigate("RequestViewScreen", { id: id });
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  return requests ? (
    <View style={styles.main}>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <View style={styles.container}>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.bloodType}>
            <Text style={styles.text}>Blood type</Text>
            <Picker
              ref={pickerRef}
              selectedValue={bloodType}
              onValueChange={(bloodType) => filterRrequestsByBloodType(bloodType)}
              style={styles.picker}
            >
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
            </Picker>
          </View>
          <View style={styles.city}>
            <Text style={styles.text}>City</Text>
            <Picker
              ref={pickerRef}
              selectedValue={city}
              onValueChange={(city) => filterRrequestsByCity(city)}
              style={styles.picker}
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
              <Picker.Item label="Beirut" value="Beirut" />
              <Picker.Item label="Tripoli" value="Tripoli" />
              <Picker.Item label="Saida" value="Saida" />
              <Picker.Item label="Byblos" value="Byblos" />
              <Picker.Item label="Zahle" value="Zahle" />
              <Picker.Item label="Tyre" value="Tyre" />
              <Picker.Item label="Mount Lebanon" value="Mount Lebanon" />
              <Picker.Item label="Baalbak" value="Baalbak" />
              <Picker.Item label="Baabda" value="Baabda" />
              <Picker.Item label="Nabatieh" value="Nabatieh" />
            </Picker>
          </View>
        </View>
        <View style={styles.reset}>
          <TouchableOpacity onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Available Requests</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={requests}
          renderItem={({item}) => {
            return (
              <ListComponentMain
                onPress={() => navigateRequestView(item.id)}
                bloodType={item.type}
                date={item.created_at.substr(0, 10)}
                city={item.city}
                unitsCount={item.left_number_of_units}
              />
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  ) : (
    <EmptyState 
      loading={true}
      icon={"coffee"}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    paddingBottom: '61%'
  },
  picker: {
    backgroundColor: colors.background,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    marginRight: "15%",
  },
  listContainer: {
    // paddingBottom: "61%",
  },
  city: {
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 15,
    marginLeft: 10,
  },
  bloodType: {
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  right: {
    flexDirection: "row",
  },
  reset: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  text: {
    fontSize: 16,
  },
  resetText: {
    fontSize: 16,
    color: colors.white
  },
  filter: {
    marginTop: 12,
    marginLeft: 10,
  },
  filterText: {
    fontSize: 20,
  },
  header: {
    marginLeft: 20,
    marginTop: 10
  },
  headerText: {
    fontSize: 20
  }
});

export default HomeScreen;
