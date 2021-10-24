import React, {useEffect, useState} from "react";
import {FlatList, Text, View, StyleSheet} from "react-native";
import MyDonationsComponent from "../../../components/MyDonationsComponent";
import {colors} from "../../../constants/palette";

const MyDonationsScreen = () => {

useEffect(() => {
  setNumber(DATA.length)
}, [])  
const DATA = [
  {
    donation_id: 1,
    blood_request_id: 3,
    is_accepted: 0,
    first_name: "Ahmad",
    last_name: "Abd",
    type: "A-",
    city: "Saidaa",
    hospital: "Najjar",
  },
  {
    donation_id: 2,
    blood_request_id: 4,
    is_accepted: 0,
    first_name: "Ahmad",
    last_name: "Abd",
    type: "A-",
    city: "Saida",
    hospital: "Najjarr",
  },
  {
    donation_id: 3,
    blood_request_id: 4,
    is_accepted: 0,
    first_name: "Ahmadd",
    last_name: "Abd",
    type: "A-",
    city: "Saida",
    hospital: "Najjarr",
  },
]
  
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
