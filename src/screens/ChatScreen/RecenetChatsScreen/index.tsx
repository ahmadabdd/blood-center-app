import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import { colors } from "../../../constants/palette";
import {useNavigation} from "@react-navigation/core";

const RecentChatsScreen = () => {
  const navigation = useNavigation();

  const navigateChat = () => {
    navigation.navigate("ChatScreen");
  };
  
  const navigateNewRequest = () => {
      navigation.navigate("NewRequestScreen");
    };
  return (
    <View>
      
      <Button
        title="Go to chat"
        color="#666666"
        onPress={ navigateChat }
      />
      <Button
          title="New Request Screen"
          color="#666666"
          onPress={navigateNewRequest}
        />
    </View>
    
    
  )
};

export default RecentChatsScreen;
