import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {ActivityIndicator} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState('');

  const fetchWeather = async location => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${WEATHER_API_KEY}`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setError('cant fetch');
    } finally {
      setLoading(false);
    }
  };

  const handleError = err => {
    console.log(err);
  };

  useEffect(() => {
    // if (location) {
    // 	fetchWeather()
    // }
    (async () => {
      const getRequest = await Geolocation.requestAuthorization(async () => {
        const getPermission = await Geolocation.getCurrentPosition(
          async location => {
            setLocation(location.coords);
            await fetchWeather(location.coords);
          },
          handleError,
        );
      }, handleError);
    })();
  }, [location]);
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
