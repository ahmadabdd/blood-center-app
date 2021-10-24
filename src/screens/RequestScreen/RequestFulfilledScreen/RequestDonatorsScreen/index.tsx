import React, {useEffect, useState} from "react";
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestsDonatorsComponent from "../../../../components/RequestsDonatorsComponent";
import {colors} from "../../../../constants/palette";
import {Avatar} from "react-native-elements";

const DATA = [
  {
    id: "1",
    bloodType: "B+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "2",
    bloodType: "A+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
  {
    id: "3",
    bloodType: "A+",
    date: "2021-5-19",
    firstName: "Ahmad",
    lastName: "Abd",
  },
];

const RequestDonatorsScreen = (props) => {
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
              source={props.image}
              title="P"
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
      firstName={item.firstName}
      lastName={item.lastName}
      date={item.date}
      id={item.id}
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
          data={DATA}
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
