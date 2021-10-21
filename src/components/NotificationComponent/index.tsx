import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NotificationComponent = () => {
  const [header, setHeader] = useState("This is a header");
  const [body, setBody] = useState("This is a body");
  const [time, setTime] = useState("1 hr");

  return (
    <TouchableOpacity>
    <View style={styles.container}>
        <View style={styles.left}>
          <View>
            <Text style={styles.header}>{header}</Text>
          </View>
          <View>
            <Text style={styles.body}>{body}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.time}>{time}</Text>
          <View style={styles.icon}>
            <MaterialCommunityIcons name={"arrow-right"} size={20} />
          </View>
        </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginTop: 7,
    // marginLeft: 5,
    // marginRight: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16,
    paddingTop: 5
  },
  left: {},
  right: {},
  time: {
    paddingRight: 20,
  },
  icon: {
    paddingTop: 10
  },
});

export default NotificationComponent;
