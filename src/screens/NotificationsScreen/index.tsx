import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import {colors} from "../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import NotificationComponent from "../../components/NotificationComponent";

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const navigateRequestView = () => {
    navigation.navigate("RequestViewScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  return (
    <View>
      <NotificationComponent />
      <NotificationComponent />
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
    </View>
  );
};

export default NotificationsScreen;
