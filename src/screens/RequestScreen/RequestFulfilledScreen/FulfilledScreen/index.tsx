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
  const user = useSelector((state) => state?.user);
  const [requests, setRequests] = useState();
  const [test, setTest] = useState();

  useEffect(() => {
    fetch("https://blood-center.tk/api/get_user_requests_fulfilled", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
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
