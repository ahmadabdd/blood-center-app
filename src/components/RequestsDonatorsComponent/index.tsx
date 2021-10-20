import {colors} from "../../constants/palette";
import {Text, View, Button, StyleSheet, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider, Avatar} from "react-native-elements";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const DATA = [
  {
    id: "1",
    firstName: "Ahmad",
    lastName: "Abd",
    date: "2021-5-19",
  },
  {
    id: "2",
    firstName: "Test",
    lastName: "Abd",
    date: "2021-5-19",
  },
  {
    id: "3",
    firstName: "Aya",
    lastName: "Badr",
    date: "2021-5-19",
  },
  {
    id: "4",
    firstName: "Ahmad",
    lastName: "Abd",
    date: "2021-5-19",
  },
  {
    id: "5",
    firstName: "Test",
    lastName: "Abd",
    date: "2021-5-19",
  },
  {
    id: "6",
    firstName: "Aya",
    lastName: "Badr",
    date: "2021-5-19",
  },
];

const Item = ({firstName, lastName, date}) => (
  <View>
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar
          activeOpacity={0.2}
          avatarStyle={{}}
          containerStyle={{backgroundColor: "#BDBDBD"}}
          icon={{}}
          iconStyle={{}}
          imageProps={{}}
          onLongPress={() => alert("onLongPress")}
          onPress={() => alert("onPress")}
          overlayContainerStyle={{}}
          placeholderStyle={{}}
          rounded
          size="large"
          source={{uri: ""}}
          title="P"
          titleStyle={{}}
        />
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    <View>
      <Divider
        style={{width: "100%"}}
        color={colors.text_dark}
        insetType="middle"
        subHeaderStyle={{}}
        width={1}
        orientation="horizontal"
      />
    </View>
  </View>
);

const RequestsDonatorsComponent = () => {
  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");

  const renderItem = ({item}) => (
    <Item
      firstName={item.firstName}
      lastName={item.lastName}
      date={item.date}
    />
  );

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          <Text style={styles.header}>{bloodType}</Text>
        </View>
        <View style={styles.headerContainerRight}>
          <Text style={styles.hospital}>{hospital}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    margin: 15,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    color: colors.white,
    fontFamily: Roboto_500Medium,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 25,
  },
  hospital: {
    color: colors.white,
    fontFamily: Roboto_500Medium,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 27,
    fontSize: 25,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    flexDirection: "row",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "space-between",
  },
  name: {
    color: colors.text,
    fontFamily: Roboto_700Bold,
    fontSize: 27,
    paddingLeft: 10,
    paddingTop: 18,
  },
  date: {
    color: colors.text,
    fontFamily: Roboto_500Medium,
    paddingRight: 17,
    paddingTop: 7,
    fontSize: 15,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    margin: 5,
    padding: 10,
  },
  left: {
    flex: 1,
    flexDirection: "row",
  }
});

export default RequestsDonatorsComponent;
