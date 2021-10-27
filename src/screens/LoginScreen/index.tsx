import React, {useState} from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {Text, View, StyleSheet, Button} from "react-native";
import EmptyState from "../../components/EmptyState";
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
                first_name: "Ahmad",
                last_name: "Abd",
                email: "ahmad@gmail.com",
                profile_picture_url:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLGPNomfEy0pcUi86d1YbN7zVupY89ZZPtlC6uM4F3buwHw3KnQSQQBkS7ijYt1GEjDI&usqp=CAU",
                is_available: 1,
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTMzMjEwNiwiZXhwIjoxNjM1MzY4MTA2LCJuYmYiOjE2MzUzMzIxMDYsImp0aSI6IjVXWlE4VjdtSWNuSTJNYk4iLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.PbzRloEcoHprwjeX5wk00tfsJPPVJDgWOtkY-tV7LoQ"
              },
            })
          );
        } else {
          alert('Invalid credentials')
        }
        console.log(responseJson.status)
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
        <Text style={styles.header}>Log in</Text>
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
            <TouchableOpacity
              onPress={navigateRegister}
              style={styles.registerBtn}
            >
              <Text style={styles.registerBtn}>Sign up</Text>
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
    marginLeft: "3%",
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
  registerBtnContainer: {
    marginTop: "6%",
    alignSelf: "center",
  },
  registerBtn: {
    fontSize: 18,
  },
});
export default LoginScreen;
