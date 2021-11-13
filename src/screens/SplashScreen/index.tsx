import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import {colors} from "../../constants/palette";
import {useNavigation} from "@react-navigation/core";

const SplashScreen: () => JSX.Element = () => {
  const navigation = useNavigation();
  const navigateLogin = () => {
    navigation.navigate("LoginScreen");
  };
  const navigateRegister = () => {
    navigation.navigate("RegisterScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.upperHeader}>Welcome to</Text>
        <Text style={styles.lowerHeader}>Blood Center</Text>
        <Text style={styles.subHeader}>Ready to save lives?</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Button title="Login" color={colors.primary} onPress={navigateLogin} />
        </View>
        <View style={styles.registerBtn}>
          <Button title="Register" color={colors.black} onPress={navigateRegister} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: '35%'
  },
  upperHeader: {
    fontSize: 32,
  },
  lowerHeader: {
    fontSize: 40,
  },
  subHeader: {
    fontSize: 18,
    marginVertical: '5%'
  },
  bodyContainer: {
    margin: 20,
    marginTop: '50%',
  },
  registerBtn: {
    marginTop: '2%',
  },
});
export default SplashScreen;
