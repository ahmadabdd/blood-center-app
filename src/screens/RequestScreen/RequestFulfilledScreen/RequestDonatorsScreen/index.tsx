import React, {useEffect, useState} from "react";
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestsDonatorsComponent from "../../../../components/RequestsDonatorsComponent";
import {colors} from "../../../../constants/palette";
import {Avatar} from "react-native-elements";

const RequestDonatorsScreen = (props) => {
  const [requests, setRequests] = useState();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjEzMy4yMC4yMlwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTA4NzQ4OCwiZXhwIjoxNjM1MTIzNDg4LCJuYmYiOjE2MzUwODc0ODgsImp0aSI6InNtU1dXbTFONkZ4OUg0SVUiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.68uKvBCqfylNon96B_CjAC7X4B0HNG_tXBysxUMgViA";

  useEffect(() => {
    fetch("http://3.133.20.22/api/get_request_donations", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
      body: JSON.stringify({
        request_id: '2'
      })
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

  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");

  const Item = (props) => (
    <View>
      <TouchableOpacity onPress={() => alert(props.id)}>
        <View style={styles.listContainer}>
          <View style={styles.left}>
            <Avatar
              activeOpacity={0.2}
              avatarStyle={{}}
              containerStyle={{backgroundColor: "#BDBDBD"}}
              icon={{}}
              iconStyle={{}}
              imageProps={{}}
              // onLongPress={() => alert("onLongPress")}
              // onPress={() => alert("onPress")}
              overlayContainerStyle={{}}
              placeholderStyle={{}}
              rounded
              size="large"
              source={{uri: props.image}}
              titleStyle={{}}
            />
            <Text style={styles.name}>
              {props.firstName} {props.lastName}
            </Text>
          </View>
          <View>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      firstName={item.first_name}
      lastName={item.last_name}
      date={item.date}
      id={item.id}
      image={item.user_profile_picture}
      user_id={item.user_id}
    />
  );

  const renderSeparator = (props) => (
    <View
      style={{
        backgroundColor: "black",
        height: 0.3,
      }}
    />
  );
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.header}>{bloodType}</Text>
        </View>
        <View>
          <Text style={styles.hospital}>{hospital}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={requests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    margin: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 25,
  },
  hospital: {
    color: colors.white,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 27,
    fontSize: 25,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    color: colors.text,
    fontSize: 25,
    paddingLeft: 10,
    paddingTop: 18,
  },
  date: {
    color: colors.text,
    paddingRight: 17,
    paddingTop: 7,
    fontSize: 12,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    padding: 10,
  },
  left: {
    flex: 1,
    flexDirection: "row",
  },
});

export default RequestDonatorsScreen;
