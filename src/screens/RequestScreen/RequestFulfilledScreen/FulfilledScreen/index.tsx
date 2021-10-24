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

const DATA = [
  {
    id: "1",
    bloodType: "B+",
    date: "2021-5-19",
    city: "Beirut",
    hospital: "test",
  },
  {
    id: "2",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    hospital: "test",
  },
  {
    id: "3",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    hospital: "test",
  },
  {
    id: "4",
    bloodType: "AB+",
    date: "2021-5-19",
    city: "Tripoli",
    hospital: "test",
  },
  {
    id: "5",
    bloodType: "A+",
    date: "2021-5-19",
    city: "Tripoli",
    hospital: "test",
  },
];

const FulfilledScreen = () => {
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

  return (
    <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <Button
        title="In progress"
        color="#666666"
        onPress={navigateInProgress}
      />
      <View style={styles.listContainer}>
        <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <FulfilledComponent
            bloodType={item.bloodType}
            date={item.date}
            city={item.city}
            hospital={item.hospital}
            onPress={navigateRequestsDonators}
          />
          )
        }}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
});

export default FulfilledScreen;
