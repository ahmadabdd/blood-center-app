import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestComponent from "../../../../components/RequestComponent";
import {colors} from "../../../../constants/palette";

const DATA = [
  {
    id: "1",
    bloodType: "B+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "2",
    bloodType: "A+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "3",
    bloodType: "A+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "4",
    bloodType: "AB+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "5",
    bloodType: "A+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
];

const RequestsScreen = (navigation: any) => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <RequestComponent
              bloodType={item.bloodType}
              date={item.date}
              firstName={item.firstName}
              lastName={item.lastName}
            />
          );
        }}
      />
    </View>
  );
};

export default RequestsScreen;
