import React, {useRef} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {colors} from "../constants/palette";
import ProfileScreen from "../screens/ProfileScreen/MyDonationsScreen";
import MyDonationsScrees from "../screens/ProfileScreen/ProfileScreen";
import HealthRecordScreen from "../screens/ProfileScreen/HealthRecordScreen";
import EditProfileScreen from "../screens/ProfileScreen/EditProfileScreen";

export function ProfileStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator>

      <RootStackNav.Screen name="ProfileScreen" 
      component={ProfileScreen} />

      <RootStackNav.Screen name="MyDonationsScrees" 
      component={MyDonationsScrees} />

      <RootStackNav.Screen name="HealthRecordScreen" 
      component={HealthRecordScreen} />

      <RootStackNav.Screen name="EditProfileScreen" 
      component={EditProfileScreen} />
    
    </RootStackNav.Navigator>
  );
}
