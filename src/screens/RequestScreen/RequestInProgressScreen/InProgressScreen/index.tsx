import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";
import NewRequestComponent from "../../../../components/NewRequestComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";
import EmptyState from "../../../../components/EmptyState";

const InProgressScreen = ({ navigation }) => {
  const [requests, setRequests] = useState();
  

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTIzMDEzMiwiZXhwIjoxNjM1MjY2MTMyLCJuYmYiOjE2MzUyMzAxMzIsImp0aSI6ImlvR3h0eTdaSjdld28xZVYiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Ag-FfBgX4PMy2BT6gbplew25n2CP1_R-h45nBtRMAJ0";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_user_requests", {
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

  const navigateFulfilled = () => {
    navigation.navigate("FulfilledScreen");
  };
  const navigateRequests = (id) => {
    navigation.navigate("RequestsScreen", { id: id });
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

  return requests ?(
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
                city={item.city}
                hospital={item.hospital}
                bloodType={item.type}
                date={item.created_at.substr(0, 10)}
                onPress={() => navigateRequests(item.id)}
              />
            );
          }}
        />
      </View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
    </View>
  ) : (
    <EmptyState 
      loading={true}
      icon={'coffee'}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
});
export default InProgressScreen;
