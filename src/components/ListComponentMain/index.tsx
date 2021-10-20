import {colors} from "../../constants/palette";
import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';


const ListComponentMain = () => {
    const [unitsCount, setUnitsCount] = useState(2);
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
            <Text style={styles.header}>AB+</Text>
            <Text style={styles.date}>2021-10-15</Text>
            </View>
            <View style={styles.bodyContainer}>
            <View style={styles.bodyRight}>
                <Text style={styles.upperBody}>Beirut</Text>
                {unitsCount == 1 ? (
                <Text style={styles.lowerBody}> {unitsCount}  Unit </Text>
                ) : (
                <Text style={styles.lowerBody}> {unitsCount}  Units </Text>
                )}
            </View>
            <View style={styles.bodyLeft}>
                <View style={styles.icon}>
                <MaterialCommunityIcons name={"arrow-right"} size={25} />
                </View>
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
      header: {
        color: colors.white,
        fontFamily: Roboto_500Medium,
        paddingLeft: 27,
        paddingTop: 7,
        paddingBottom: 5,
        fontSize: 25,
      },
      date: {
        color: colors.white,
        fontFamily: Roboto_500Medium,
        paddingRight: 27,
        paddingTop: 12,
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
        fontFamily: Roboto_700Bold,
        fontSize: 27,
        paddingLeft: 27,
        paddingTop: 5,
      },
      lowerBody: {
        color: colors.text,
        fontFamily: Roboto_400Regular,
        fontSize: 22,
        paddingLeft: 24,
        paddingBottom: 8,
      },
      icon: {
        paddingTop: 29,
        paddingRight: 25,
      },
});

export default ListComponentMain;