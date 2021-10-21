import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../components/ComponentTemplate";
import EmptyState from "../../components/EmptyState";
import FullWidthButton from "../../components/FullWidthButton";
import NewRequestComponent from "../../components/NewRequestComponent";
import RequestViewComponent from "../../components/RequestViewComponent";
import { colors } from "../../constants/palette";

const NewRequestScreen = (navigation: any) => {
  
  return (
    <View>
      <NewRequestComponent />
    </View>
  )
};

export default NewRequestScreen;
