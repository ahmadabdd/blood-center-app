import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NewRequestBottunComponent = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.button}>
        <MaterialCommunityIcons name={"plus"} size={30} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '141%',
    marginLeft: 250,
    position: 'absolute', 
  },
  button: {
    backgroundColor: colors.green, 
    width: 60, 
    height: 60, 
    top: 60,
    left: 30,
    paddingTop: 16,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 20
  }
});

export default NewRequestBottunComponent;
