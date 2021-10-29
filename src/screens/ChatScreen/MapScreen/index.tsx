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
import {store} from "../../../redux/store";

const MapScreen = ({navigation}) => {
  const user = useSelector((state) => state?.user);

  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  useEffect(() => {
    console.log(user.userProfile.long)
    console.log(user.userProfile.lat)
  }, [])
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Number(user.userProfile.long),
          longitude: Number(user.userProfile.lat),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
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
