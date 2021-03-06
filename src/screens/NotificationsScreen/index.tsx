import React, {useEffect, useState} from "react";
import {FlatList, RefreshControl} from "react-native";
import {useSelector} from "react-redux";
import EmptyState from "../../components/EmptyState";
import NotificationComponent from "../../components/NotificationComponent";
import NotificationRequestComponent from "../../components/NotificationRequestComponent";
import {ScrollView} from "react-native-gesture-handler";

const NotificationsScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState();
  const user = useSelector((state) => state?.user);

  const getNotifications = () => {
    fetch("https://blood-center.tk/api/get_notifications", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + user.userProfile.token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setNotifications(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getNotifications();
  }, []);

  const navigateRequestView = (blood_request_id) => {
    navigation.navigate("RequestViewScreen", {id: blood_request_id});
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    getNotifications();
    setRefreshing(false);
  };
  
  return notifications ? (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
        data={notifications}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => {
          return item.blood_request_id ? (
            <NotificationRequestComponent
              header={item.header}
              body={item.body}
              time={item.created_at.substr(0, 10)}
              onPress={() => navigateRequestView(item.blood_request_id)}
            />
          ) : (
            <NotificationComponent
              header={item.header}
              body={item.body}
              time={item.created_at.substr(0, 10)}
            />
          );
        }}
      />
    </ScrollView>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
};

export default NotificationsScreen;
