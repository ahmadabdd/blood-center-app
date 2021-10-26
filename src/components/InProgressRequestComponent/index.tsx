import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider, Avatar} from "react-native-elements";
import {useNavigation} from "@react-navigation/core";


const InProgressRequestComponent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.bloodType}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.upperBody}>
          <View>
            <Text style={styles.city}>
              {props.city} {props.hospital}
            </Text>
          </View>
          <View>
            <Text style={styles.units}> units: {props.unitsCount} </Text>
          </View>
        </View>
        <Divider
          style={{
            width: "80%",
            marginLeft: 27,
            marginTop: 12,
            marginBottom: 15,
          }}
          color={colors.text_dark}
          insetType="left"
          subHeaderStyle={{}}
          width={1}
          orientation="horizontal"
        />
        <TouchableOpacity onPress={props.onPress}>
          <View style={styles.lowerBody}>
            {/* <View style={styles.avatar}>
              <Text style={styles.unitsCount}>{ props.requestCount }</Text>
            </View> */}
            <Text style={styles.donation}> Donation requests </Text>
            <View style={styles.icon}>
              <MaterialCommunityIcons name={"arrow-right"} size={25} />
            </View>
          </View>
        </TouchableOpacity>
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
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 25,
  },
  name: {
    color: colors.text,
    fontSize: 27,
    paddingLeft: 27,
  },
  date: {
    color: colors.white,
    paddingRight: 27,
    paddingTop: 20,
    paddingBottom: 3,
    fontSize: 17,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    // flexDirection: "row",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "space-between",
  },
  upperBody: {
    flexDirection: "row",
  },
  lowerBody: {
    flexDirection: "row",
  },
  city: {
    color: colors.text,
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 10,
  },
  units: {
    color: colors.text,
    fontSize: 22,
    paddingLeft: 24,
    paddingTop: 13,
  },
  donation: {
    color: colors.text,
    fontSize: 20,
    paddingLeft: 12,
    paddingTop: 10,
  },
  // avatar: {
  //   paddingLeft: 27,
  //   paddingBottom: 18,
  //   marginLeft: 15,
  //   marginRight: 7
  // },
  icon: {
    paddingTop: 13,
    paddingLeft: 16,
  },
  unitsCount: {
    fontSize: 30
  }
});

export default InProgressRequestComponent;
