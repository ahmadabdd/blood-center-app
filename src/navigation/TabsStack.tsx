import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";
import { NavigationContainer } from "@react-navigation/native";

import NotificationsScreen from "../screens/NotificationsScreen";
import { HomeStack } from "./HomeStack";
import { RequestsStack } from "./RequestsStack";
import { ChatStack } from "./ChatStack";
import { ProfileStack } from "./ProfileStack";

export function BottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
      <NavigationContainer
        ref={navigationRef}
      >
      <BottomTabsNav.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: colors.primary_dark,
          inactiveTintColor: colors.background,
          showLabel: true,
          allowFontScaling: false,
          keyboardHidesTabBar: true,
          shadowColor: '#FFF',
          labelStyle: {
            fontWeight: "bold",
            fontSize: 10,
          },
        }}
      >
        <BottomTabsNav.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"home"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="RequestsStack"
          component={RequestsStack}
          options={{
            title: 'Requests',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"cog"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"cog"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="ChatStack"
          component={ChatStack}
          options={{
            title: 'Chat',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"cog"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"cog"}
                size={28}
                color={color}
              />
            ),
          }}
        />
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}
