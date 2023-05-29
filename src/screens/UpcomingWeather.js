import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import ListItem from '../components/ListItem';
const DATA = [
  {
    dt: 1661875200,
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
    dt_txt: '2022-08-30 16:00:00',
  },
  {
    dt: 1661875200,
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'clouds',
      },
    ],
    dt_txt: '2022-08-30 17:00:00',
  },
];

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <ListItem
      dt_txt={item.dt_txt}
      temp_max={item.main.temp_max}
      temp_min={item.main.temp_min}
      condition={item.weather[0].main}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/clouds.jpeg')}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#6a70de',
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
