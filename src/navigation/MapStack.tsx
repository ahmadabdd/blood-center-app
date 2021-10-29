import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";
// import ChatScreen from "../screens/ChatScreen/ChatsScreen";
import MapScreen from "../screens/ChatScreen/MapScreen";
import NewRequestScreen from "../screens/NewRequestScreen";

export function MapStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <RootStackNav.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Map",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />

      {/* <RootStackNav.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat",
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      /> */}

      <RootStackNav.Screen
        name="NewRequestScreen"
        component={NewRequestScreen}
        options={{
          title: "New request",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </RootStackNav.Navigator>
  );
}
