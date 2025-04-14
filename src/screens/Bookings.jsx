// src/screens/Booking.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Booking = () => (
  <>
    <View>
      <Header />
    </View>

    <View style={styles.container}>
      <Text style={styles.text}>Booking Screen</Text>
    </View>
  </>
);

export default Booking;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
