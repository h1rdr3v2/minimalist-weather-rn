import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ListItem = props => {
  const {dt_txt, temp_max, temp_min, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={[styles.temp, styles.big]}>{dt_txt}</Text>
      <Text style={styles.temp}>{temp_max}</Text>
      <Text style={styles.temp}>{temp_min}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderWidth: 2,
    justifyContent: 'space-around',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  temp: {
    color: 'white',
  },
});
export default ListItem;
