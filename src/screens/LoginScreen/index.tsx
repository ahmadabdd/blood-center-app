import React, {useState} from "react";
import {
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {Text, View, StyleSheet, Button} from "react-native";
import {store} from "../../redux/store";
import {updateUserProfile} from "../../redux/slices/userSlice";
import {useNavigation} from "@react-navigation/core";
import {colors} from "../../constants/palette";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    if (!email) {
      alert("Please enter your email");
    } else if (!email.includes("@gmail.com")) {
      alert("Please enter a valid email");
    } else if (!password) {
      alert("Please enter your password");    
    } else {
      fetch("https://blood-center.tk/api/login", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.status) {
          store.dispatch(
            updateUserProfile({
              userProfile: {
                id: responseJson.user.id,
                firstName: responseJson.user.first_name,
                lastName: responseJson.user.last_name,
                email: responseJson.user.email,
                profile_picture_url: responseJson.user.profile_picture_url,
                is_available: responseJson.user.is_available,
                token: responseJson.user.token,
                city_id: responseJson.user.city_id,
                long: responseJson.user.long,
                lat: responseJson.user.lat,
                bloodType: responseJson.user.blood_type,
              },
            })
          );
        } else {
          alert('Invalid credentials')
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
  const navigateRegister = () => {
    navigation.navigate("RegisterScreen");
  };
  

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign in</Text>
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
        <View style={styles.bodyContainer}>
          <View>
            <Button title="Login" color={colors.black} onPress={login} />
          </View>
          <View style={styles.registerBtnContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={navigateRegister}>
                <Text style={styles.signinrBtn}>Sign up</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginHorizontal: "4%",
    marginVertical: "2%"
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 16,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: "40%",
  },
  header: {
    fontSize: 40,
  },
  bodyContainer: {
    margin: 20,
    marginTop: "10%",
  },
  registerBtn: {
    fontSize: 18,
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
});
export default LoginScreen;
