import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";

import ChatScreen from "../screens/ChatScreen/ChatScreen";
import RecentChatsScreen from "../screens/ChatScreen/RecenetChatsScreen";

export function ChatStack() {
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

      <RootStackNav.Screen name="RecentChatsScreen" 
      component={RecentChatsScreen}
      options={{
        title: "Recent chats",
        headerStyle: {
          backgroundColor: colors.primary
        }
      }}  />

      <RootStackNav.Screen name="ChatScreen" 
      component={ChatScreen}
      options={{
        title: "Chat",
        headerStyle: {
          backgroundColor: colors.primary
        }
      }}  />

    </RootStackNav.Navigator>
  );
}
