import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import {colors} from "../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import NotificationComponent from "../../components/NotificationComponent";
import NewRequestBottunComponent from "../../components/NewRequestBottunComponent";

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_notifications", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setNotifications(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigateRequestView = () => {
    navigation.navigate("RequestViewScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  return (
    <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <View>
        <FlatList
          data={notifications}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <NotificationComponent
                header={item.header}
                body={item.body}
                time={item.time}
                onPress={navigateRequestView}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;
