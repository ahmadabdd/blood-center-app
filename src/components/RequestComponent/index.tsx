import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Divider, Avatar} from "react-native-elements";

const RequestComponent = (props) => {
  const viewListItem = () => {
    alert("go to user profile");
  };
  const accept = () => {
    alert("declined");
  };
  const decline = () => {
    alert("accepted");
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
        <TouchableOpacity onPress={viewListItem}>
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
          <Button title="Decline" color={colors.red} onPress={accept} />
        </View>
        <View style={styles.accept}>
          <Button title="Accept" color={colors.green} onPress={decline} />
        </View>
      </View>
    </View>
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
});

export default RequestComponent;
