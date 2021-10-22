import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import ListComponentMain from "../../../components/ListComponentMain";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";

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
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <Button
        title="Request View Screen"
        color="#666666"
        onPress={navigateRequestView}
      />
      <ListComponentMain />
      <ListComponentMain />
    </View>
  );
};

export default HomeScreen;
