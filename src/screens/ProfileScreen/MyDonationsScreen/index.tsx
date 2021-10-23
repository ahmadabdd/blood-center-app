import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import MyDonationsComponent from "../../../components/MyDonationsComponent";
import { colors } from "../../../constants/palette";

const MyDonationsScreen = (navigation: any) => {
  const [header, setHeader] = useState("Donations");
  const [number, setNumber] = useState(5);
  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [dateOfBirth, setDdateOfBirth] = useState('2021-02-15');
  const [city, setCity] = useState("Beirut");
  const [hospital, setHospital] = useState("Razk");



  return (
    <View>
      <View style={styles.headContainer}>
          <View style={styles.left}>
            <View>
              <Text style={styles.header}>{header}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.header}>{number}</Text>
          </View>
        </View>
        <View>
          <MyDonationsComponent />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: colors.background,
    margin: '5%',
    marginBottom: '1%',
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
  },
  right: {
    paddingRight: "10%",
  },
  left: {},
});

export default MyDonationsScreen;
