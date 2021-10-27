import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Dimensions, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import MapView from "react-native-maps";
import NewRequestScreen from "../../NewRequestScreen";
import { Button } from "react-native-elements/dist/buttons/Button";

const MapScreen = () => {
  const navigation = useNavigation();


  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 33.895094962662675,
        longitude: 35.50316943278384,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} 
      />
      {/* <NewRequestBottunComponent  onPress={navigateNewRequest}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
