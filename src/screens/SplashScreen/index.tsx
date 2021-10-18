import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Button } from "react-native";
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
    </View>
  )
};

export default SplashScreen;
