import React, { useEffect, useState } from "react";
import { FlatList, Text, View , StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../../constants/palette";
import {Divider, Avatar, Switch} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";


const EditProfileScreen = (navigation: any) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [firstName, setFirstName] = useState("Ahmad");
  const [lastName, setLastName] = useState("Abd");
  const [status, setStatus] = useState("Available");
  const [header, setHeader] = useState("Availability");
  const [value, setValue] = React.useState(true);
  const [image, setImage] = useState(null);
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
              onLongPress={pickImage}
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
          </View>
        </View>
        <SafeAreaView>
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeText} 
        placeholder={'First name'}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
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
    marginTop: "20%",
    marginRight: "25%",
  },
  name: {
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: '2%',
    padding: 10,
    backgroundColor: colors.background
  },
});

export default EditProfileScreen;
