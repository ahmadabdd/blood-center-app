import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import { colors } from "../../../constants/palette";

const MyDonationsScreen = (navigation: any) => {
  
  return (
    <View>
      <Text>
      My Donations Screen
      </Text>
    </View>
  )
};

export default MyDonationsScreen;
