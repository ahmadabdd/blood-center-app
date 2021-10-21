import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider, Avatar} from "react-native-elements";

const InProgressRequestComponent = () => {
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
        <Text style={styles.header}>{bloodType}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.upperBody}>
          <View>
            <Text style={styles.city}>
              {city}, {hospital}
            </Text>
          </View>
          <View>
            <Text style={styles.units}> units: {unitsCount} </Text>
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
        <TouchableOpacity onPress={() => alert("go to requests")}>
          <View style={styles.lowerBody}>
            <View style={styles.avatar}>
              <Avatar
                activeOpacity={0.2}
                avatarStyle={{}}
                containerStyle={{backgroundColor: "#BDBDBD"}}
                icon={{}}
                iconStyle={{}}
                imageProps={{}}
                onLongPress={() => alert("onLongPress")}
                overlayContainerStyle={{}}
                placeholderStyle={{}}
                rounded
                size="medium"
                // source={{ uri: "" }}
                title="P"
                titleStyle={{}}
              />
            </View>
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
    margin: 15,
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
  avatar: {
    paddingLeft: 27,
    paddingBottom: 18,
  },
  icon: {
    paddingTop: 13,
    paddingLeft: 16,
  },
});

export default InProgressRequestComponent;
