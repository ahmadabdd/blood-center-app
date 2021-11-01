import React, {useEffect, useState} from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  RefreshControl,
} from "react-native";
import {useSelector} from "react-redux";
import EmptyState from "../../../../components/EmptyState";
import {colors} from "../../../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import FulfilledComponent from "../../../../components/FulfilledComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FulfilledScreen = () => {
  const user = useSelector((state) => state?.user);
  const [requests, setRequests] = useState();

  const getRequests = () => {
    fetch("https://blood-center.tk/api/get_user_requests_fulfilled", {
      method: "GET",
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
  }, []);

  const navigation = useNavigation();

  const navigateInProgress = () => {
    navigation.navigate("InProgressScreen");
  };

  const navigateFulfilled = () => {
    navigation.navigate("FulfilledScreen");
  };
  const navigateRequestsDonators = (id) => {
    navigation.navigate("RequestDonatorsScreen", {id: id});
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getRequests();
    setRefreshing(false);
  };

  return requests ? (
    <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <View style={styles.listContainer}>
            <FlatList
              data={requests}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => {
                return (
                  <FulfilledComponent
                    bloodType={item.type}
                    date={item.created_at.substr(0, 10)}
                    city={item.city}
                    hospital={item.hospital}
                    onPress={() => navigateRequestsDonators(item.id)}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "20%",
  },
  btnContainer: {
    backgroundColor: colors.blue,
    padding: 10,
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
    alignContent: "center",
  },
  btn: {
    fontSize: 20,
    color: colors.white,
    paddingLeft: "15%",
  },
  icon: {
    paddingLeft: 25,
  },
});

export default FulfilledScreen;
