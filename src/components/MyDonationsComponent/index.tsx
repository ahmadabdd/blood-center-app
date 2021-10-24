import {colors} from "../../constants/palette";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MyDonationsComponent = (props) => {
  const [unitsCount, setUnitsCount] = useState(2);
  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [date, setDate] = useState('2021-02-15');
  const [city, setCity] = useState("Tripoli");
  const [hospital, setHospital] = useState("Razk");

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text></Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.upperBody}>{props.city}, {props.hospital}</Text>
          <Text style={styles.lowerBody}>{props.firstName} {props.lastName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15, 
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: colors.white,
    fontSize: 14,
    padding: '2%',
    marginRight: '8%'
  },
  bodyContainer: {
    backgroundColor: colors.background,
    flexDirection: "row",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "space-between",
  },
  upperBody: {
    color: colors.text,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 5,
  },
  lowerBody: {
    color: colors.text,
    fontSize: 22,
    paddingLeft: '16%',
    paddingBottom: 8,
  },
  icon: {
    paddingTop: 29,
    paddingRight: 25,
  },
});

export default MyDonationsComponent;
