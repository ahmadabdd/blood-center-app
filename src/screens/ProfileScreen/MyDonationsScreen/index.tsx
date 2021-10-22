import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { colors } from "../../../constants/palette";

const MyDonationsScreen = (navigation: any) => {
  const [header, setHeader] = useState("Donations");
  const [number, setNumber] = useState(5);
  return (
    <View>
      <View style={styles.container}>
          <View style={styles.left}>
            <View>
              <Text style={styles.header}>{header}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.header}>{number}</Text>
          </View>
        </View>
        
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    margin: '5%',
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
