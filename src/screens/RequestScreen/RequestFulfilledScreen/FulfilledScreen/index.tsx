import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import { colors } from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import FulfilledComponent from "../../../../components/FulfilledComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";


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
  const [unitsCount, setUnitsCount] = useState(2);
  const [city, setCity] = useState("Tripoli");
  const [hospital, setHospital] = useState("Al Hayat Hospital");
  const [date, setDate] = useState("2021-12-12");
  const [bloodType, setBloodType] = useState("O+");
  return (
    <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
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
      <FulfilledComponent 
        unitsCount={unitsCount}
        city={city}
        hospital={hospital}
        date={date}
        bloodType={bloodType}
        onPress={navigateRequestsDonators}
      />
    </View>
  )
};

export default FulfilledScreen;
