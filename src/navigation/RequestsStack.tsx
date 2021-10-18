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
    <RootStackNav.Navigator>

      <RootStackNav.Screen name="FulfilledScreen" 
      component={FulfilledScreen} />

      <RootStackNav.Screen name="RequestDonatorsScreen" 
      component={RequestDonatorsScreen} />

      <RootStackNav.Screen name="InProgressScreen" 
      component={InProgressScreen} />

      <RootStackNav.Screen name="RequestsScreen" 
      component={RequestsScreen} />
    
    </RootStackNav.Navigator>
  );
}
