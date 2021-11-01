import React, {useRef, useState} from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {Text, View, StyleSheet, Button, Platform } from "react-native";
import {useNavigation} from "@react-navigation/core";
import {colors} from "../../constants/palette";
import {Picker} from "@react-native-picker/picker";
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [city, setCity] = useState('1');
  const [FirebaseToken, setFirebaseToken] = useState(null);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    console.log(token);
    setFirebaseToken(token);
    return token;
  }

  const register = async () => {
    await registerForPushNotificationsAsync()

    if (!firstName) {
      alert("Please enter your first name");
    } else if (!lastName) {
      alert("Please enter your last name");
    } else if (!email) {
      alert("Please enter your email");
    } else if (!email.includes("@gmail.com")) {
      alert("Please enter a valid email");
    } else if (!password) {
      alert("Please enter your password");
    } else if (password.length < 5) {
      alert("Please enter a valid password");
    } else if (!confirmPassword) {
      alert("Please confirm your password");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!city) {
      alert("Please select your city");
    } else {
      fetch("https://blood-center.tk/api/register", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          city_id: city,
          firebase_token: FirebaseToken
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            navigation.navigate('LoginScreen')
          } else {
            alert("Invalid credentials");
          }
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const navigateLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome aboard!</Text>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>First name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setFirstName}
              placeholder={"First name"}
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Last name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setLastName}
              placeholder={"Last name"}
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              placeholder={"Email"}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder={"Password"}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Confirm password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setConfirmPassword}
              placeholder={"Confirm password"}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>City</Text>
        </View>
        <View style={styles.picker}>
          <Picker
            ref={pickerRef}
            selectedValue={city}
            onValueChange={(city) => setCity(city)}
            mode="dialog"
          >
            <Picker.Item label="Beirut" value="1" />
            <Picker.Item label="Tripoli" value="2" />
            <Picker.Item label="Saida" value="3" />
            <Picker.Item label="Byblos" value="4" />
            <Picker.Item label="Zahle" value="5" />
            <Picker.Item label="Tyre" value="6" />
            <Picker.Item label="Mount Lebanon" value="7" />
            <Picker.Item label="Baalbak" value="8" />
            <Picker.Item label="Baabda" value="9" />
          </Picker>
        </View>
        <View>
          <View style={styles.bodyContainer}>
            <View>
              <Button title="SignUp" color={colors.black} onPress={register} />
            </View>
            <View style={styles.registerBtnContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={navigateLogin}>
                <Text style={styles.signinrBtn}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginHorizontal: "4%",
    marginVertical: "2%",
  },
  textContainer: {
    marginHorizontal: "4%",
    marginTop: "2%",
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 14,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: "7%",
    marginBottom: "5%",
  },
  header: {
    fontSize: 30,
  },
  bodyContainer: {
    margin: 20,
    marginTop: "10%",
  },
  registerBtnContainer: {
    marginTop: "6%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 50,
  },
  signinrBtn: {
    fontSize: 16,
    paddingLeft: 5,
  },
  picker: {
    height: 40,
    padding: 10,
    backgroundColor: colors.background,
    marginHorizontal: "4%",
  },
});
export default LoginScreen;
