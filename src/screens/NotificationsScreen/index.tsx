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

const DATA = [
  {
    id: "1",
    header: "Ahmad",
    body: "Abd",
    time: "1 hr",
  },
  {
    id: "2",
    header: "Test",
    body: "Test",
    time: "2 hr",
  },
  {
    id: "3",
    header: "Test",
    body: "Test",
    time: "2 hr",
  },
];

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
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <View>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => {
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
