import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider} from "react-native-elements";

const RequestViewComponent = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          <Text style={styles.header}>{props.bloodType}</Text>
        </View>
        <View style={styles.headerContainerRight}>
          <Text style={styles.date}>{props.date}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.upperBody}>
            {props.city}, {props.hospital}
          </Text>
          <Text style={styles.name}>
            {props.firstName} {props.lastName}
          </Text>
          <Divider
            style={{width: "100%", margin: 30}}
            color={colors.text_dark}
            insetType="left"
            subHeaderStyle={{}}
            width={1}
            orientation="horizontal"
          />
          <Text style={styles.units}> Number of units: {props.unitsCount} </Text>
          <Text style={styles.expiry}> Expiry date: {props.expiryDate} </Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainerLeft: {},
  headerContainerRight: {},
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 30,
  },
  date: {
    color: colors.white,
    paddingRight: 27,
    paddingTop: 12,
    paddingBottom: 3,
    fontSize: 17,
  },
  time: {
    color: colors.white,
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
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 20,
  },
  name: {
    color: colors.text,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 10,
  },
  units: {
    color: colors.text,
    fontSize: 22,
    paddingLeft: 24,
    paddingBottom: 8,
  },
  expiry: {
    color: colors.text,
    fontSize: 22,
    paddingLeft: 24,
    paddingBottom: 20,
  },
});

export default RequestViewComponent;
