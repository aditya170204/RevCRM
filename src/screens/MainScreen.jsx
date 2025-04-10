import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

import FloatingButton from '../components/FloatingButton';
import Dashboard from './/Dashboard';

const MainScreen = () => {
  return (
    <View
      style={{
        // justifyContent: 'center',
        // backgroundColor: 'red',
        width: '99%',
        marginLeft: '1%',
        marginTop: '10.5%',
        marginBottom: 110,
      }}>
      <Header />
      <Dashboard />
      <FloatingButton />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
