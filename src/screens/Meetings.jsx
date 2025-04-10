// src/screens/Meetings.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Meetings = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Meetings Screen</Text>
  </View>
);

export default Meetings;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
