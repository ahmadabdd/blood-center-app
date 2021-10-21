import {colors} from "../../constants/palette";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";
import React, {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider, Avatar} from "react-native-elements";

const DATA = [
  {
    id: "1",
    firstName: "Ahmad",
    lastName: "Abd",
    date: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
  {
    id: "2",
    firstName: "Test",
    lastName: "Test",
    date: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
  {
    id: "3",
    firstName: "Test",
    lastName: "Test",
    date: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
  {
    id: "4",
    firstName: "Ahmad",
    lastName: "Abd",
    date: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
  {
    id: "5",
    firstName: "Ahmad",
    lastName: "Abd",
    date: "2021-5-19",
    image:
      "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
  },
];

const ViewProfile = (id) => {
  Alert.alert(id)
}

const Item = ({id, firstName, lastName, date, image}) => (
  <View>
    <TouchableOpacity onPress={() => alert(id)}>
      <View style={styles.listContainer}>
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
            source={image}
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
    </TouchableOpacity>
  </View>
);

const RequestsDonatorsComponent = () => {
  const [hospital, setHospital] = useState("AUBMC");
  const [bloodType, setBloodType] = useState("AB+");
  // const [image, setImage] = useState("https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg");

  const renderItem = ({item}) => (
    <Item
      firstName={item.firstName}
      lastName={item.lastName}
      date={item.date}
      id={item.id}
    />
  );

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: "black",
        height: 0.3,
      }}
    />
  );
      
  return (
    <SafeAreaView style={styles.container}>
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
            ItemSeparatorComponent={renderSeparator}

          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    margin: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 25,
  },
  hospital: {
    color: colors.white,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 27,
    fontSize: 25,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    // flexDirection: "row",
    // borderBottomRightRadius: 8,
    // borderBottomLeftRadius: 8,
    // justifyContent: "space-between",
  },
  name: {
    color: colors.text,
    fontSize: 25,
    paddingLeft: 10,
    paddingTop: 18,
  },
  date: {
    color: colors.text,
    paddingRight: 17,
    paddingTop: 7,
    fontSize: 12,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    padding: 10,
  },
  left: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
});

export default RequestsDonatorsComponent;
