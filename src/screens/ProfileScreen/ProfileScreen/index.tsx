import React, {useEffect, useState} from "react";
import {FlatList, Text, View, Button} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const NavigateHealthRecord = () => {
    navigation.navigate("HealthRecordScreen");
  };
  const navigateMyDonations = () => {
    navigation.navigate("MyDonationsScreen");
  };
  const navigateEditProfile = () => {
    navigation.navigate("EditProfileScreen");
  };
  const navigateNewRequest = () => {
    navigation.navigate("NewRequestScreen");
  };
  return (
    <View>
      <Button
        title="Health record"
        color="#666666"
        onPress={NavigateHealthRecord}
      />
      <Button
        title="My donations"
        color="#666666"
        onPress={navigateMyDonations}
      />
      <Button
        title="Edit Profile"
        color="#666666"
        onPress={navigateEditProfile}
      />

      <Button
        title="New Request Screen"
        color="#666666"
        onPress={navigateNewRequest}
      />
    </View>
  );
};

export default ProfileScreen;
