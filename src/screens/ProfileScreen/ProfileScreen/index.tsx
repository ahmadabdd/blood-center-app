import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import { colors } from "../../../constants/palette";

const ProfileScreen = (navigation: any) => {
  
  return (
    <View>
      <Text>
        Profile Screen
      </Text>
    </View>
  )
};

export default ProfileScreen;
