import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestComponent from "../../../../components/RequestComponent";
import { colors } from "../../../../constants/palette";

const RequestsScreen = (navigation: any) => {
  
  return (
    <View>
      <RequestComponent />
    </View>
  )
};

export default RequestsScreen;
