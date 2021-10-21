import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import { colors } from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import FulfilledComponent from "../../../../components/FulfilledComponent";


const FulfilledScreen = () => {
  const navigation = useNavigation();

  const navigateInProgress = () => {
    navigation.navigate('InProgressScreen')
  };
  const navigateRequestsDonators = () => {
    navigation.navigate('RequestDonatorsScreen')
  };
  const navigateFulfilled = () => {
    navigation.navigate('FulfilledScreen')
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  return (
    <View>
      <Button
        title="Fulfilled"
        color="#666666"
        onPress={ navigateFulfilled }
      />
      <Button
        title="In progress"
        color="#666666"
        onPress={ navigateInProgress }
      />
      <Button
        title="Request donations"
        color="#666666"
        onPress={ navigateRequestsDonators }
      />
      
  <Button
        title="New Request Screen"
        color="#666666"
        onPress={navigateNewRequest}
      />
      <FulfilledComponent />
    </View>
  )
};

export default FulfilledScreen;
