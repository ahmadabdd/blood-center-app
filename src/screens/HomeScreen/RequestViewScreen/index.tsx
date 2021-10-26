import React, {useEffect, useState} from "react";
import {FlatList, Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import RequestViewComponent from "../../../components/RequestViewComponent";
import { useNavigation } from "@react-navigation/core";
import {colors} from "../../../constants/palette";

const RequestViewScreen = ({ navigation, route }) => {
  const id = route.params.id
  const [requestData, setRequestData] = useState();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_request_data", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: (JSON.stringify({ "request_id": id}))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setRequestData(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Submit = (id) => {
    fetch("http://127.0.0.1:8000/api/make_donation", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: (JSON.stringify({ "blood_request_id": id}))
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return requestData ?(
    <View>
      <RequestViewComponent 
      unitsCount={requestData[0].left_number_of_units}
      bloodType={requestData[0].type}
      hospital={requestData[0].hospital}
      city={requestData[0].city}
      date={requestData[0].created_at.substr(0, 10)}
      time={requestData[0].created_at.substr(11, 11)}
      expiryDate={requestData[0].expiry_date}
      firstName={requestData[0].first_name}
      lastName={requestData[0].last_name}
      />
      <TouchableOpacity onPress={() => Submit(requestData[0].id)} style={styles.container}>
        <Text style={styles.text}>Donate</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <EmptyState 
      loading={true}
      icon={"coffee"}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    marginTop: "63%",
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
});

export default RequestViewScreen;
function useNavigationParam(arg0: string) {
  throw new Error("Function not implemented.");
}

