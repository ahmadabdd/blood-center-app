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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_user_requests_fulfilled", {
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

  return requests ? (
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
                bloodType={item.type}
                date={item.created_at.substr(0, 10)}
                city={item.city}
                hospital={item.hospital}
                onPress={navigateRequestsDonators}
              />
            );
          }}
        />
      </View>
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
});

export default FulfilledScreen;
