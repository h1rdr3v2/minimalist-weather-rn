import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/lagos.jpeg')}>
        <View style={styles.darkoverlay}>
          <Text style={styles.country}>Nigeria</Text>
          <Text style={styles.state}>Abia</Text>
          <View style={styles.wrapper}>
            <Feather name="user" size={20} color="red" />
            <Text style={styles.people}>8000</Text>
          </View>
          <View style={[styles.wrapper, styles.timewrapper]}>
            <View style={styles.wrapper}>
              <Feather name="sunrise" size={30} color="white" />
              <Text style={styles.time}>10:46:558 AM</Text>
            </View>
            <View style={styles.wrapper}>
              <Feather name="sunset" size={30} color="white" />
              <Text style={styles.time}>17:46:558 AM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timewrapper: {
    gap: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
  },
  country: {
    fontSize: 40,
    color: 'white',
  },
  people: {
    color: 'red',
    fontSize: 20,
  },
  state: {
    fontSize: 30,
    color: 'white',
  },
  time: {
    fontSize: 20,
    color: 'white',
  },
  darkoverlay: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%',
  },
});
export default City;
