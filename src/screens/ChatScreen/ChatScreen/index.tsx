import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import { colors } from "../../../constants/palette";

const ChatsScreen = (navigation: any) => {
  
  return (
    <View>
      <Text>
      Chats Screen
      </Text>
    </View>
  )
};

export default ChatsScreen;
