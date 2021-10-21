import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import ListComponentMain from "../../components/ListComponentMain";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import {colors} from "../../constants/palette";
import {useNavigation} from "@react-navigation/core";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const SplashScreen: () => JSX.Element = () => {
  const navigation = useNavigation();
  const navigateLogin = () => {
    navigation.navigate("LoginScreen");
  };
  const navigateRegister = () => {
    navigation.navigate("RegisterScreen");
  };
  return (
    <View>
      <Button title="Login" color="#666666" onPress={navigateLogin} />
      <Button title="Register" color="#666666" onPress={navigateRegister} />
      <View>

      </View>
    </View>
  );
};


export default SplashScreen;
