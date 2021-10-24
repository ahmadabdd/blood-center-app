import React, {useEffect, useState} from "react";
import {FlatList, Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import RequestViewComponent from "../../../components/RequestViewComponent";
import {colors} from "../../../constants/palette";

const RequestViewScreen = (navigation: any) => {
  const Submit = () => {
    alert("submited");
  };
  return (
    <View>
      <RequestViewComponent />
      <TouchableOpacity onPress={Submit} style={styles.container}>
        <Text style={styles.text}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    marginTop: "63%",
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
});

export default RequestViewScreen;
