import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import ListComponentMain from "../../../components/ListComponentMain";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateRequestView = () => {
    navigation.navigate("RequestViewScreen");
  };

  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  
  return (
    <View>
      <Button
        title="Request View Screen"
        color="#666666"
        onPress={navigateRequestView}
      />
      
      <Button
        title="New Request Screen"
        color="#666666"
        onPress={navigateNewRequest}
      />
      <ListComponentMain />
      <ListComponentMain />
    </View>
  );
};

export default HomeScreen;
