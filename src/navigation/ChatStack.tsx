import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";

import ChatsScreen from "../screens/ChatScreen/ChatScreen";
import RecentChatsScreen from "../screens/ChatScreen/RecenetChatsScreen";

export function ChatStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator>

      <RootStackNav.Screen name="ChatsScreen" 
      component={ChatsScreen} />

      <RootStackNav.Screen name="RecentChatsScreen" 
      component={RecentChatsScreen} />

    </RootStackNav.Navigator>
  );
}
