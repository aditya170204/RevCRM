import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Leads from '../screens/Leads';
import Meetings from '../screens/Meetings';
import Bookings from '../screens/Bookings';
import DrawerMenu from './DrawerMenu';
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
        {/* <Stack.Screen name="Leads" component={Leads} />
        <Stack.Screen name="Meetings" component={Meetings} />
        <Stack.Screen name="Bookings" component={Bookings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
