import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { colors } from "../constants/palette";
import SplashScreen from "../screens/SplashScreen";
import RequestViewComponent from "../components/RequestViewComponent";
import ListComponentMain from "../components/ListComponentMain";
import FulfilledComponent from "../components/FulfilledComponent";
import RequestsDonatorsComponent from "../components/RequestsDonatorsComponent";
import NewRequestComponent from "../components/NewRequestComponent";

export function OnboardingStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef} >
      <RootStackNav.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          cardStyle:{
            backgroundColor: colors.white
          }
        }}
      >
        <RootStackNav.Screen name="SplashScreen" 
        component={NewRequestComponent}
        options={{
          title: "Blood Center",
          headerStyle: {
            backgroundColor: colors.primary
          }
        }} />

        <RootStackNav.Screen name="LoginScreen" 
        component={LoginScreen}
        options={{
          title: "Log in",
          headerStyle: {
            backgroundColor: colors.primary
          }
        }} />

        <RootStackNav.Screen name="RegisterScreen" 
        component={RegisterScreen}
        options={{
          title: "Sign up",
          headerStyle: {
            backgroundColor: colors.primary
          }
        }} />

      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
