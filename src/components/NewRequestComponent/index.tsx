import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, SafeAreaView} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider} from "react-native-elements";

const NewRequestComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>New request</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.question}>What blood type do you need?</Text>
        </View>
        <View>
          <Text style={styles.question}>-PICKER HERE-</Text>
        </View>
        <View>
          <Text style={styles.question}>Where are you?</Text>
        </View>
        <View>
          <Text style={styles.question}>-PICKER HERE-</Text>
        </View>
        <View>
          <Text style={styles.question}>Which hospital?</Text>
        </View>
        <View>
          <Text style={styles.question}>-PICKER HERE-</Text>
        </View>
        <View style={styles.button}>
          <Button 
          title="Submit" 
          color={colors.green} 
          onPress={() => alert('pressed')}/>
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
    justifyContent: "center",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 24,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  question: {
    color: colors.primary_green,
    paddingLeft: 27,
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 20,
  },
  button: {},
});

export default NewRequestComponent;
