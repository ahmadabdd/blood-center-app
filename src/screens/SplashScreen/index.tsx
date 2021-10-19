import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import { colors } from "../../constants/palette";
import { useNavigation } from '@react-navigation/core';

const  SplashScreen: () => JSX.Element = () => {
  const navigation = useNavigation()
  const navigateLogin = () => {
    navigation.navigate('LoginScreen')
  }
  const navigateRegister = () => {
    navigation.navigate('RegisterScreen')
  }
  return (
    <View>
      <Text>
        Splash Screen
      </Text>
      <Button 
        title="Login"
        color="#666666"
        onPress={ navigateLogin }
        />
      <Button 
      title="Register"
      color="#666666"
      onPress={ navigateRegister }
      />
      <View>
        <Text style={styles.divider}>
          this is a custome component
        </Text>


        <View style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              AB+
            </Text>
            <Text style={styles.date}>
              2021-10-15
            </Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.body}>
              This is body
            </Text>
          </View>
        </View>


      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: colors.primary
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  header: {

  },
  date: {

  },
  bodyContainer: {
    backgroundColor: colors.background
  },
  body: {

  }
});

export default SplashScreen;
