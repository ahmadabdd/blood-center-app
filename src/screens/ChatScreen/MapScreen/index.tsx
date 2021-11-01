import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Dimensions, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import NewRequestBottunComponent from "../../../components/NewRequestBottunComponent";
import MapView, {Callout, Marker} from "react-native-maps";
import NewRequestScreen from "../../NewRequestScreen";
import {store} from "../../../redux/store";

const MapScreen = ({navigation}) => {
  const user = useSelector((state) => state?.user);
  const [requests, setRequests] = useState();

  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  const navigateRequestView = (id) => {
    navigation.navigate("RequestViewScreen", {id: id});
  };
  
  const getRequests = () => {
    fetch("https://blood-center.tk/api/get_all_requests", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setRequests(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRequests();
    console.log(user.userProfile.long);
    console.log(user.userProfile.lat);
  }, []);


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
      >
        { requests ? requests.map((request) => (
          <Marker
          coordinate={{
            latitude: Number(request.long),
            longitude: Number(request.lat),
          }}
        >
          <Callout onPress={() => navigateRequestView(request.id)} >
            <View>
              <Text>Blood type: {request.type}</Text>
              <Text>Hospital: {request.hospital}</Text>
              <Text>Name: {request.first_name} {request.last_name}</Text>
              <Text>Numbre of units: {request.left_number_of_units}</Text>
            </View>
          </Callout>
        </Marker>
        )) : null}
      </MapView>

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
