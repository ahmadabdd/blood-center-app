import React, {useEffect, useRef, useState} from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import ListComponentMain from "../../../components/ListComponentMain";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import {Picker} from "@react-native-picker/picker";
import {renderNode} from "react-native-elements/dist/helpers";

const DATA = [
  {
    id: "1",
    bloodType: "B+",
    date: "2021-5-19",
    city: "Beirut",
    unitsCount: "2",
  },
  {
    id: "2",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
  },
  {
    id: "3",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
  },
  {
    id: "4",
    bloodType: "AB+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
  },
  {
    id: "5",
    bloodType: "A+",
    date: "2021-5-19",
    city: "test",
    unitsCount: "1",
  },
  {
    id: "6",
    bloodType: "A+",
    date: "2021-5-19",
    city: "testlast",
    unitsCount: "1",
  },
  {
    id: "7",
    bloodType: "A+",
    date: "2021-5-19",
    city: "testlast",
    unitsCount: "1",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState();
  const [bloodType, setBloodType] = useState();

  const navigateRequestView = () => {
    navigation.navigate("RequestViewScreen");
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

  return (
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
              onValueChange={(bloodType, itemIndex) => setBloodType(bloodType)}
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
              onValueChange={(city, itemIndex) => setCity(city)}
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
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => {
            return (
              <ListComponentMain
                onPress={navigateRequestView}
                bloodType={item.bloodType}
                date={item.date}
                city={item.city}
                unitsCount={item.unitsCount}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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
    paddingBottom: "40%",
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
});

export default HomeScreen;
