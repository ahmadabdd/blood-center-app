import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";
import NewRequestComponent from "../../../../components/NewRequestComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";

const DATA = [
  {
    id: "1",
    bloodType: "B+",
    date: "2021-5-19",
    city: "Beirut",
    unitsCount: "2",
    requestCount: "1",
    hospital: "test"
  },
  {
    id: "2",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
    requestCount: "1",
    hospital: "test"
  },
  {
    id: "3",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
    requestCount: "1",
    hospital: "test"
  },
  {
    id: "4",
    bloodType: "AB+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
    requestCount: "1",
    hospital: "test"
  },
  {
    id: "5",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    unitsCount: "1",
    requestCount: "1",
    hospital: "test"
  },
];

const InProgressScreen = () => {
  const navigation = useNavigation();

  const navigateFulfilled = () => {
    navigation.navigate("FulfilledScreen");
  };
  const navigateRequests = () => {
    navigation.navigate("RequestsScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  const [unitsCount, setUnitsCount] = useState(2);
  const [requestCount, setRequestCount] = useState(1);
  const [city, setCity] = useState("Beirut");
  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");
  const [date, setDate] = useState("2021-10-20");
  return (
    <View>
      <Button title="Fulfilled" color="#666666" onPress={navigateFulfilled} />
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => {
            return (
              <InProgressRequestComponent
                unitsCount={item.unitsCount}
                requestCount={item.requestCount}
                bloodType={item.bloodType}
                city={item.city}
                hospital={item.hospital}
                date={item.date}
                onPress={navigateRequests}
              />
            );
          }}
        />
      </View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
});
export default InProgressScreen;
