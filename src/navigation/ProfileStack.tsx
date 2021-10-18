import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";
import HealthRecordScreen from "../screens/ProfileScreen/HealthRecordScreen";
import EditProfileScreen from "../screens/ProfileScreen/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import MyDonationsScreen from "../screens/ProfileScreen/MyDonationsScreen";

export function ProfileStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator>

      <RootStackNav.Screen name="ProfileScreen" 
      component={ProfileScreen} />

      <RootStackNav.Screen name="MyDonationsScreen" 
      component={MyDonationsScreen} />

      <RootStackNav.Screen name="HealthRecordScreen" 
      component={HealthRecordScreen} />

      <RootStackNav.Screen name="EditProfileScreen" 
      component={EditProfileScreen} />
    
    </RootStackNav.Navigator>
  );
}
