import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateRequestView = () => {
    navigation.navigate("RequestViewScreen");
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Request View Screen"
        color="#666666"
        onPress={navigateRequestView}
      />
    </View>
  );
};

export default HomeScreen;
