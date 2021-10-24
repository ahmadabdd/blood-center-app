import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";
import NewRequestComponent from "../../../../components/NewRequestComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";

const InProgressScreen = () => {
  const [requests, setRequests] = useState();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjEzMy4yMC4yMlwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTA4NzQ4OCwiZXhwIjoxNjM1MTIzNDg4LCJuYmYiOjE2MzUwODc0ODgsImp0aSI6InNtU1dXbTFONkZ4OUg0SVUiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.68uKvBCqfylNon96B_CjAC7X4B0HNG_tXBysxUMgViA";

  useEffect(() => {
    fetch("http://3.133.20.22/api/get_user_requests", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
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
          data={requests}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item, index}) => {
            return (
              <InProgressRequestComponent
                unitsCount={item.left_number_of_units}
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
