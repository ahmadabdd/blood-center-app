import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FulfilledComponent = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.bloodType}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View> 
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.upperBody}>{props.city}</Text>
            <Text style={styles.lowerBody}>{props.hospital}</Text>
          </View>
          <View>
            <View style={styles.icon}>
              <MaterialCommunityIcons name={"arrow-right"} size={25} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    
    
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "space-between",
  },
  upperBody: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 27,
    paddingLeft: 27,
    paddingTop: 5,
  },
  lowerBody: {
    color: colors.text,
    fontSize: 22,
    paddingLeft: 27,
    paddingBottom: 10,
  },
  icon: {
    paddingTop: 29,
    paddingRight: 25,
  },
});

export default FulfilledComponent;
