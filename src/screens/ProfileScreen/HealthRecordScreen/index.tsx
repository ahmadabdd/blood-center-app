import React, {useEffect, useState} from "react";
import {FlatList, Text, View, StyleSheet, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import ComponentTemplate from "../../../components/ComponentTemplate";
import EmptyState from "../../../components/EmptyState";
import FullWidthButton from "../../../components/FullWidthButton";
import {colors} from "../../../constants/palette";
import {Avatar} from "react-native-elements";
import HealthRecordComponent from "../../../components/HealthRecordComponent";

const HealthRecordScreen = (props) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [status, setStatus] = useState(null);
  const [image, setImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [lastDonationDate, setLastDonationDate] = useState(null);
  const [bloodType, setBloodType] = useState(null);
  const [city, setCity] = useState(null);
  const [isSmoker, setIsSmoker] = useState(null);
  const [haveTattoo, setHavetattoo] = useState(null);

  useEffect(() => {
    //Change query. city.name as city and blood_type.name as bloodType
    const DATA = [
      {
        first_name: "Ahmad",
        last_name: "Abd",
        email: "ahmad@gmail.com",
        profile_picture_url: "http://3.133.20.22//storage/zUqM11S7eIRt.jpg",
        name: "Mount Lebanon",
        type: "A+",
        date_of_birth: "1998-07-11",
        last_donation: "2021-08-18",
        is_available: 1,
        is_smoker: 0,
        have_tattoo: 0,
      },
    ];

    setFirstName(DATA[0].first_name);
    setLastName(DATA[0].last_name);
    setImage(DATA[0].profile_picture_url);
    setCity(DATA[0].name);
    setBloodType(DATA[0].type);
    setDateOfBirth(DATA[0].date_of_birth);
    setLastDonationDate(DATA[0].last_donation);
    setStatus(DATA[0].is_available);
    setIsSmoker(DATA[0].is_smoker);
    setHavetattoo(DATA[0].have_tattoo);
  });

  return (
    <ScrollView>
      <View>
        <View style={styles.headContainer}>
          <View style={styles.avatar}>
            <Avatar
              activeOpacity={0.2}
              avatarStyle={{}}
              containerStyle={{backgroundColor: colors.text}}
              iconStyle={{}}
              imageProps={{}}
              overlayContainerStyle={{}}
              placeholderStyle={{}}
              rounded
              size="large"
              source={
                image
                  ? { uri: "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg", }
                  : {
                      uri: image
                    }
              }
              titleStyle={{}}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.status}>
              {status ? "Available" : "Unavailable"}
            </Text>
          </View>
        </View>
        <HealthRecordComponent header={"Blood type"} value={bloodType} />
        <HealthRecordComponent header={"City"} value={city} />
        <HealthRecordComponent header={"Date of birth"} value={dateOfBirth} />
        <HealthRecordComponent
          header={"Last donation date"}
          value={lastDonationDate ? lastDonationDate : "-"}
        />
        <HealthRecordComponent
          header={"Smoker"}
          value={isSmoker ? "Yes" : "No"}
        />
        <HealthRecordComponent
          header={"Have tattoo"}
          value={haveTattoo ? "Yes" : "No"}
        />
      </View>
    </ScrollView>
  );
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
    marginBottom: "20%",
  },
  name: {
    fontSize: 25,
  },
  status: {
    fontSize: 14,
  },
});

export default HealthRecordScreen;
