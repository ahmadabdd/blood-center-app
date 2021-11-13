import React, {useEffect, useState} from "react";
import {FlatList, Text, View, ScrollView, StyleSheet, RefreshControl} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../../constants/palette";
import InProgressRequestComponent from "../../../../components/InProgressRequestComponent";
import NewRequestBottunComponent from "../../../../components/NewRequestBottunComponent";
import EmptyState from "../../../../components/EmptyState";
import {TouchableOpacity} from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const InProgressScreen = ({navigation, route}) => {
  const user = useSelector((state) => state?.user);
  const [requests, setRequests] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRequests = () => {
    fetch("https://blood-center.tk/api/get_user_requests", {
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
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    setLoading(true)
    getRequests();
  }, []);

  const navigateFulfilled = () => {
    navigation.navigate("FulfilledScreen");
  };
  const navigateRequests = (id) => {
    navigation.navigate("RequestsScreen", {id: id});
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };

  const onRefresh = () => {
    setRefreshing(true);
    getRequests();
    setRefreshing(false);
  };

  return requests ? (
    requests.length > 0 ? (
      <View>
      <NewRequestBottunComponent onPress={navigateNewRequest} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      <View>
        <View>
          <TouchableOpacity onPress={navigateFulfilled}>
            <View style={styles.btnContainer}>
              <Text style={styles.btn}>Fulfilled requests</Text>
              <View>
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name={"arrow-right"}
                    size={25}
                    color={"white"}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={requests}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => {
              return (
                <InProgressRequestComponent
                  unitsCount={item.left_number_of_units}
                  requestCount={item.requestCount}
                  city={item.city}
                  hospital={item.hospital}
                  bloodType={item.type}
                  date={item.created_at.substr(0, 10)}
                  onPress={() => navigateRequests(item.id)}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
    </View>
    ) : (
      loading ? (
        <EmptyState loading={loading} icon={"cloud"} />
      ) : (
        <EmptyState 
        loading={loading} 
        icon={"cloud"} 
        title={'No requests in progress yet'}
        actionButton={{
          title: "Fullfilled requests",
          callback: () => {
            navigateFulfilled();
          },
        }}
        />
      )
    )
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: "5%",
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
    paddingLeft: "20%",
  },
  icon: {
    paddingLeft: 30,
  },
});
export default InProgressScreen;
