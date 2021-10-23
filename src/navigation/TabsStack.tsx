import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";
import { NavigationContainer } from "@react-navigation/native";

import NotificationsScreen from "../screens/NotificationsScreen";
import { HomeStack } from "./HomeStack";
import { RequestsStack } from "./RequestsStack";
import { MapStack } from "./MapStack";
import { ProfileStack } from "./ProfileStack";
import { NotificationsStack } from "./NotificationsStack";



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
          activeTintColor: colors.black,
          inactiveTintColor: colors.text,
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
            title: 'Donate',
            headerShown: false,
            // headerTintColor: colors.primary_green,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"blood-bag"}
                size={28}
                color={color}
                //heart-plus
                //water
                //blood-bag
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="RequestsStack"
          component={RequestsStack}
          options={{
            title: 'Requests',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"card-plus"}
                size={28}
                color={color}
                //email-plus
                //card-plus
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="NotificationsStack"
          component={NotificationsStack}
          options={{
            title: 'Notifications',
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.primary
            },
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"bell"}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <BottomTabsNav.Screen
          name="MapStack"
          component={MapStack}
          options={{
            title: 'Map',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"map"}
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
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"account"}
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
