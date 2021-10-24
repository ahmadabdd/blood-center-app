import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import FulfilledComponent from "../../../../components/FulfilledComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";

const FulfilledScreen = () => {
  const [requests, setRequests] = useState();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjEzMy4yMC4yMlwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTA4NzQ4OCwiZXhwIjoxNjM1MTIzNDg4LCJuYmYiOjE2MzUwODc0ODgsImp0aSI6InNtU1dXbTFONkZ4OUg0SVUiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.68uKvBCqfylNon96B_CjAC7X4B0HNG_tXBysxUMgViA";

  useEffect(() => {
    fetch("http://3.133.20.22/api/get_user_requests_fulfilled", {
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

  const navigateInProgress = () => {
    navigation.navigate("InProgressScreen");
  };
  const navigateRequestsDonators = () => {
    navigation.navigate("RequestDonatorsScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  return (
    <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <Button
        title="In progress"
        color="#666666"
        onPress={navigateInProgress}
      />
      <View style={styles.listContainer}>
        <FlatList
        data={requests}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item, index}) => {
          return (
            <FulfilledComponent
            bloodType={item.blood_type}
            date={item.date}
            city={item.city}
            hospital={item.hospital}
            onPress={navigateRequestsDonators}
          />
          )
        }}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
});

export default FulfilledScreen;
