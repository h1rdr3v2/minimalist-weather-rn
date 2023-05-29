import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.HiLoWrapper}>
          <Text style={styles.HiLo}>High:</Text>
          <Text style={styles.HiLo}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its suny</Text>
        <Text style={styles.message}>Its t-shirt dat</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  HiLo: {
    color: 'black',
    fontSize: 20,
  },
  HiLoWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
