// src/screens/Meetings.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Meetings = () => (
  <>
    <View>
      <Header />
    </View>
    <View style={styles.container}>
      <Text style={styles.text}>Meetings Screen</Text>
    </View>
  </>
);

export default Meetings;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
