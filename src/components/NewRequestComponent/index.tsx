import {colors} from "../../constants/palette";
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, {useEffect, useState, useRef} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Divider} from "react-native-elements";
import {Picker} from "@react-native-picker/picker";

const NewRequestComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const Submit = () => {
    Alert.alert('Submitted!')
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>New request</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.question}>What blood type do you need?</Text>
          </View>
          <View style={styles.picker}>
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View>
            <Text style={styles.question}>Where are you?</Text>
          </View>
          <View style={styles.picker}>
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View>
            <Text style={styles.question}>Which hospital?</Text>
          </View>
          <View style={styles.picker}>
            <Picker
              ref={pickerRef}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={Submit}>
        <View style={styles.logoutContainer}>
          <Text style={styles.logout}>Submit</Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: "center",
  },
  header: {
    color: colors.white,
    paddingLeft: 27,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 24,
  },
  bodyContainer: {
    backgroundColor: colors.background,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
  },
  question: {
    color: colors.primary_green,
    paddingLeft: 27,
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 20,
  },
  picker: {
    marginRight: 20,
    marginLeft: 20,
  },
  logoutContainer: {
    backgroundColor: colors.green,
    marginTop: '65.5%', 
    padding: 20,
    alignItems: 'center',
  },
  logout: {
    fontSize: 24,
    color: colors.white,
  },
  icon: {
    paddingTop: "25%",
  },
});

export default NewRequestComponent;
