import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";
import NewRequestComponent from "../../../../components/NewRequestComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";

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
  const [unitsCount, setUnitsCount] = useState(2);
  const [requestCount, setRequestCount] = useState(1);
  const [city, setCity] = useState("Beirut");
  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");
  const [date, setDate] = useState("2021-10-20");
  return (
    <View>
      <Button title="Fulfilled" color="#666666" onPress={navigateFulfilled} />
      <Button title="In progress" color="#666666" onPress={navigateInProgress}/>
      <InProgressRequestComponent 
        unitsCount={unitsCount}
        requestCount={requestCount}
        bloodType={bloodType}
        city={city}
        hospital={hospital}
        date={date}
        onPress={navigateRequests}
      />
      <NewRequestBottunComponent onPress={navigateNewRequest} />
    </View>
  );
};

export default InProgressScreen;
