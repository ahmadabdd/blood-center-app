import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";

const InProgressScreen = () => {
  const navigation = useNavigation();

  const navigateFulfilled = () => {
    navigation.navigate("FulfilledScreen");
  };
  const navigateInProgress = () => {
    navigation.navigate("InProgressScreen");
  };
  const navigateRequests = () => {
    navigation.navigate("RequestsScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  return (
    <View>
      <Button title="Fulfilled" color="#666666" onPress={navigateFulfilled} />
      <Button
        title="In progress"
        color="#666666"
        onPress={navigateInProgress}
      />
      <Button title="Requests" color="#666666" onPress={navigateRequests} />

      <Button
        title="New Request Screen"
        color="#666666"
        onPress={navigateNewRequest}
      />
      <InProgressRequestComponent />
    </View>
  );
};

export default InProgressScreen;
