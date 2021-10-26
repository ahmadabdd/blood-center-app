import React, {useEffect, useState} from "react";
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestsDonatorsComponent from "../../../../components/RequestsDonatorsComponent";
import {colors} from "../../../../constants/palette";
import {Avatar} from "react-native-elements";

const RequestDonatorsScreen = ({ navigation }) => {
  const [requests, setRequests] = useState();
  const [hospital, setHospital] = useState('');
  const [bloodType, setBloodType] = useState('');

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_request_donations", {
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
        setHospital(responseJson[0].hospital);
        setBloodType(responseJson[0].type);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const visitProfile = (user_id) => {
    navigation.navigate('HealthRecordScreen', { user_id: user_id })
  }

  const Item = (props) => (
    <View>
      <TouchableOpacity onPress={() => visitProfile(props.user_id)}>
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
      date={item.created_at.substr(0, 10)}
      id={item.id}
      image={item.profile_picture_url}
      user_id={item.user_id}
    />
  );

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: "black",
        height: 0.3,
      }}
    />
  );

  return requests ? (
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
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
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
