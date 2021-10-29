import React, {useEffect, useRef, useState} from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import ListComponentMain from "../../../components/ListComponentMain";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import {Picker} from "@react-native-picker/picker";
import {compose} from "redux";

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState();
  const [bloodType, setBloodType] = useState();
  const [requests, setRequests] = useState();
  const user = useSelector((state) => state?.user);

  const searchRequests = (city = undefined, bloodType = undefined) => {
    setCity(city)
    setBloodType(bloodType)
    console.log(city)
    console.log(bloodType)
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
    <View>
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
              // onValueChange={(bloodType, itemIndex) => setBloodType(bloodType)}
              onValueChange={(bloodType, itemIndex) => searchRequests(bloodType)}
              style={styles.picker}
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
          <View style={styles.city}>
            <Text style={styles.text}>City</Text>
            <Picker
              ref={pickerRef}
              selectedValue={city}
              // onValueChange={(city, itemIndex) => setCity(city)}
              onValueChange={(city, itemIndex) => searchRequests(city)}
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
    paddingBottom: "64%",
  },
  city: {
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 15,
    marginLeft: 10,
  },
  bloodType: {
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
  },
  right: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
  },
  filter: {
    marginTop: 12,
    marginLeft: 55,
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
