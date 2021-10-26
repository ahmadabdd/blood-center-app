import React, {useEffect, useState} from "react";
import {FlatList, Text, View, StyleSheet} from "react-native";
import MyDonationsComponent from "../../../components/MyDonationsComponent";
import {colors} from "../../../constants/palette";

const MyDonationsScreen = () => {

  const [donations, setDonations] = useState();
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTI2NjM2NywiZXhwIjoxNjM1MzAyMzY3LCJuYmYiOjE2MzUyNjYzNjcsImp0aSI6ImY1UVd4TnRpWGxiS1RaSWwiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.6xttYADOeMKo2hM0jb3iri_2sFgYsM6TNW1NNELepFI";

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_user_donations", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "bearer " + token,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setDonations(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // setNumber(DATA.length)
  }, [])
  
  const [number, setNumber] = useState(null);
  return (
    <View>
      <View style={styles.headContainer}>
        <View style={styles.left}>
          <View>
            <Text style={styles.header}>Donations</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.header}>{number}</Text>
        </View>
      </View>
      <View>
        <FlatList 
          data={DATA}
          keyExtractor={item => String(item.donation_id)}
          renderItem={({item, index}) => {
            return (
              <MyDonationsComponent 
                // date={item.date}
                city={item.city}
                hospital={item.hospital}
                firstName={item.first_name}
                lastName={item.last_name}
              />
            )
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: colors.background,
    margin: "5%",
    marginBottom: "1%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    padding: "2%",
    paddingLeft: "10%",
  },
  right: {
    paddingRight: "10%",
  },
  left: {},
});

export default MyDonationsScreen;
