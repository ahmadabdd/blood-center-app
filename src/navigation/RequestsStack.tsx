import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";
import FulfilledScreen from "../screens/RequestScreen/RequestFulfilledScreen/FulfilledScreen";
import RequestDonatorsScreen from "../screens/RequestScreen/RequestFulfilledScreen/RequestDonatorsScreen";
import InProgressScreen from "../screens/RequestScreen/RequestInProgressScreen/InProgressScreen";
import RequestsScreen from "../screens/RequestScreen/RequestInProgressScreen/RequestsScreen";

export function RequestsStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: colors.white
        }
      }}
    >

      <RootStackNav.Screen name="FulfilledScreen" 
      component={FulfilledScreen}
      options={{
        title: "Fulfilled requests",
        headerStyle: {
          backgroundColor: '#F47174'
        }
      }}  />

      <RootStackNav.Screen name="RequestDonatorsScreen" 
      component={RequestDonatorsScreen}
      options={{
        title: "Donators",
        headerStyle: {
          backgroundColor: '#F47174'
        }
      }}  />

      <RootStackNav.Screen name="InProgressScreen" 
      component={InProgressScreen}
      options={{
        title: "Requests in progress",
        headerStyle: {
          backgroundColor: '#F47174'
        }
      }}  />

      <RootStackNav.Screen name="RequestsScreen" 
      component={RequestsScreen}
      options={{
        title: "Requests",
        headerStyle: {
          backgroundColor: '#F47174'
        }
      }}  />
    
    </RootStackNav.Navigator>
  );
}
