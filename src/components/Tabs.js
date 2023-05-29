import React from 'react';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="droplet"
              size={20}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="clock"
              size={20}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={20}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
