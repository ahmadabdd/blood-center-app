import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RequestViewScreen from "../screens/HomeScreen/RequestViewScreen";

export function HomeStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator>

      <RootStackNav.Screen name="HomeScreen" 
      component={HomeScreen} />

      <RootStackNav.Screen name="RequestViewScreen" 
      component={RequestViewScreen} />
          
    </RootStackNav.Navigator>
  );
}
