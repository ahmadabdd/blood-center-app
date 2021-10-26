import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import {colors} from "../../../../constants/palette";
import {Divider, Avatar} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {FlatList} from "react-native-gesture-handler";

const RequestsScreen = ({ navigation, route }) => {
  const id = route.params.id
  console.log(id)
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";
  const [requests, setRequests] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_request_donations", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: JSON.stringify({request_id: id}),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setRequests(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const RequestComponent = (props) => {
    const accept = () => {
      fetch("http://127.0.0.1:8000/api/accept_donation_request", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "bearer " + token,
        }),
        body: JSON.stringify({blood_request_id: id})
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          const newRequests = requests.filter((requests) => requests.user_id !== props.user_id);
          setRequests(newRequests);
          console.log(newRequests); 
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const decline = () => {
      fetch("http://3.133.20.22/api/decline_donation_request", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "bearer " + token,
        }),
        body: JSON.stringify({blood_request_id: id}),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          const newRequests = requests.filter((requests) => requests.user_id !== props.user_id);
          setRequests(newRequests);
          console.log(newRequests);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const viewListItem = (user_id) => {
      navigation.navigate('HealthRecordScreen', { user_id: user_id })
    };

    return (
      <View style={styles.cardContainer}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{props.bloodType}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => viewListItem(props.user_id)}>
            <View style={styles.bodyContainer}>
              <View>
                <Text style={styles.name}>
                  {props.firstName} {props.lastName}
                </Text>
              </View>
              <View style={styles.icon}>
                <MaterialCommunityIcons name={"arrow-right"} size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Divider
            style={styles.divider}
            color={colors.text_dark}
            insetType="left"
            subHeaderStyle={{}}
            width={1}
            orientation="horizontal"
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.decline}>
            <Button
              title="Decline"
              color={colors.red}
              onPress={() => decline()}
            />
          </View>
          <View style={styles.accept}>
            <Button
              title="Accept"
              color={colors.green}
              onPress={() => accept()}
            />
          </View>
        </View>
      </View>
    );
  };

  const closeRequest = (id) => {
    fetch("http://127.0.0.1:8000/api/close_request", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: JSON.stringify({request_id: id}),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setRequests(responseJson);
        navigation.goBack()
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return requests ? (
    <View>
      <FlatList
        data={requests}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => {
          return (
            <RequestComponent
              bloodType={item.type}
              date={item.created_at.substr(0, 10)}
              firstName={item.first_name}
              lastName={item.last_name}
              user_id={item.user_id}
            />
          );
        }}
      />
      <TouchableOpacity onPress={() => closeRequest(id)}>
        <View style={styles.logoutContainer}>
          <Text style={styles.logout}>Close</Text>
        </View>
      </TouchableOpacity> 
    </View>
  ) : (
    <EmptyState 
      loading={true}
      icon={'coffee'}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 5,
    fontSize: 25,
  },
  date: {
    color: colors.white,
    paddingRight: 27,
    paddingTop: 12,
    paddingBottom: 10,
    fontSize: 17,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    paddingTop: 20,
    paddingRight: 25,
  },
  name: {
    color: colors.text,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 12,
    paddingBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.background,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  decline: {
    fontSize: 20,
    paddingLeft: "20%",
    borderRadius: 8,
  },
  accept: {
    fontSize: 20,
    paddingRight: "20%",
  },
  divider: {
    width: "100%",
    color: colors.black,
  },
  logoutContainer: {
    backgroundColor: colors.red,
    marginTop: "53%",
    padding: 20,
    alignItems: "center",
  },
  logout: {
    fontSize: 24,
    color: colors.white,
  },
});

export default RequestsScreen;
