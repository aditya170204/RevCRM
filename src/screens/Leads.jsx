// src/screens/Leads.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Leads = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Leads Screen</Text>
  </View>
);

export default Leads;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
