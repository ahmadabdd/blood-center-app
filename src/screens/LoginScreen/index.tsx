import React from "react";
import {ScrollView} from "react-native-gesture-handler";
import {Text, View} from "react-native";
import EmptyState from "../../components/EmptyState";
import {store} from "../../redux/store";
import {updateUserProfile} from "../../redux/slices/userSlice";
import {useNavigation} from "@react-navigation/core";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <EmptyState
        //cloud-off
        //refresh-cw
        //wind
        icon={"log-in"}
        title={"Login Screen"}
        description={"here you will have your login screen"}
        actionButton={{
          title: "Login",
          callback: () => {
            store.dispatch(
              updateUserProfile({
                userProfile: {
                  first_name: "Ahmad",
                  last_name: "Abd",
                  email: "ahmad@gmail.com",
                  profile_picture_url:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLGPNomfEy0pcUi86d1YbN7zVupY89ZZPtlC6uM4F3buwHw3KnQSQQBkS7ijYt1GEjDI&usqp=CAU",
                  is_available: 1,
                  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTE4MTA3OSwiZXhwIjoxNjM1MjE3MDc5LCJuYmYiOjE2MzUxODEwNzksImp0aSI6ImltVjh4UWpsVDNUMmpoeWQiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.udiXZuNHBI4Mia7g-GDO8SSjfPYN86qkxKG9xsq7xuE"
                },
              })
            );
          },
        }}
        secondaryButton={{
          title: "Register",
          callback: () => {
            navigation.navigate("RegisterScreen");
          },
        }}
      />
    </View>
  );
};

export default LoginScreen;
