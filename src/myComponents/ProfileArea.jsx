import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import Gradient, {LinearGradient} from 'react-native-linear-gradient';

const theme = useColorScheme();
const ProfileArea = () => {
  return (
    <View>
      <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>
        ProfileArea
      </Text>
    </View>
    // <LinearGradient colors={['black', 'white']}>
    //   <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>okokok</Text>
    // </LinearGradient>
  );
};

export default ProfileArea;

const styles = StyleSheet.create({});
