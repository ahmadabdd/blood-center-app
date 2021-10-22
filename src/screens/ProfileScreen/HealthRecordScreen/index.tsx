import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import { colors } from "../../../constants/palette";
import { Avatar } from "react-native-elements";


const HealthRecordScreen = (navigation: any) => {
  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [status, setStatus] = useState("Available");
  const [header, setHeader] = useState("Availability");
  const [value, setValue] = React.useState(true);
  const [image, setImage] = useState(null)

  return (
    <View>
      <View style={styles.headContainer}>
        <View style={styles.avatar}>
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={{backgroundColor: colors.text}}
            iconStyle={{}}
            imageProps={{}}
            // onLongPress={pickImage}
            onPress={() => alert("Long press to edit!")}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="large"
            source={{uri: image}}
            titleStyle={{}}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
      <View style={styles.container}>
          <View style={styles.left}>
            <View>
              <Text style={styles.header}>{header}</Text>
            </View>
          </View>
          <View style={styles.right}>
            
          </View>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  avatar: {
    marginLeft: "10%",
    marginTop: "15%",
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "10%",
    marginTop: "2%",
  },
  nameContainer: {
    marginTop: "18%",
    marginRight: "25%",
  },
  body: {
    marginTop: "26%",
  },
  name: {
    fontSize: 25,
  },
  status: {
    fontSize: 14,
  },
  container: {
    backgroundColor: colors.background,
    marginTop: 2,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
  },
  left: {},
  right: {},
  icon: {
    paddingTop: 10,
  },
});

export default HealthRecordScreen;
