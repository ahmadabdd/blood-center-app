import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider} from "react-native-elements";

const RequestViewComponent = () => {
  const [unitsCount, setUnitsCount] = useState(2);
  const [city, setCity] = useState("Beirut");
  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");
  const [date, setDate] = useState("2021-10-20");
  const [time, setTime] = useState("10:41");
  const [expiryDate, setExpiryDate] = useState("2021-10-25");
  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          <Text style={styles.header}>{bloodType}</Text>
        </View>
        <View style={styles.headerContainerRight}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyRight}>
          <Text style={styles.upperBody}>
            {city}, {hospital}
          </Text>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Divider
            style={{width: "100%", margin: 30}}
            color={colors.text_dark}
            insetType="left"
            subHeaderStyle={{}}
            width={1}
            orientation="horizontal"
          />
          <Text style={styles.units}> Number of units: {unitsCount} </Text>
          <Text style={styles.expiry}> Expiry date: {expiryDate} </Text>
        </View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainerLeft: {},
  headerContainerRight: {},
  header: {
    color: colors.white,
    // fontFamily: Roboto_500Medium,
    paddingLeft: 27,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 30,
  },
  date: {
    color: colors.white,
    // fontFamily: Roboto_500Medium,
    paddingRight: 27,
    paddingTop: 12,
    paddingBottom: 3,
    fontSize: 17,
  },
  time: {
    color: colors.white,
    // fontFamily: Roboto_500Medium,
    paddingRight: 27,
    paddingBottom: 10,
    fontSize: 17,
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
    // fontFamily: Roboto_700Bold,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 20,
  },
  name: {
    color: colors.text,
    // fontFamily: Roboto_700Bold,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 10,
  },
  units: {
    color: colors.text,
    // fontFamily: Roboto_400Regular,
    fontSize: 22,
    paddingLeft: 24,
    paddingBottom: 8,
  },
  expiry: {
    color: colors.text,
    // fontFamily: Roboto_400Regular,
    fontSize: 22,
    paddingLeft: 24,
    paddingBottom: 20,
  },
});

export default RequestViewComponent;
