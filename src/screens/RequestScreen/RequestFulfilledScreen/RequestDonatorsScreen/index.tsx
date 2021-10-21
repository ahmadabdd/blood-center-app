import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../../components/ComponentTemplate";
import EmptyState from "../../../../components/EmptyState";
import FullWidthButton from "../../../../components/FullWidthButton";
import RequestsDonatorsComponent from "../../../../components/RequestsDonatorsComponent";
import { colors } from "../../../../constants/palette";

const RequestDonatorsScreen = (navigation: any) => {
  
  return (
    <View>
      <RequestsDonatorsComponent />
    </View>
  )
};

export default RequestDonatorsScreen;
