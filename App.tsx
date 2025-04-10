import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {myColor} from './src/myComponents/myColor';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  const theme = useColorScheme();
  console.log('theme', theme);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? myColor.dark : myColor.light,
        borderWidth: 1,
        borderColor: theme === 'dark' ? myColor.light : myColor.dark,
        width: '97.6%',
        marginLeft: '1%',
        marginTop: '10.5%',
      }}>
      {/* <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: theme === 'dark' ? myColor.light : myColor.dark,
        }}>
        Haye garmiii {theme} mode ON!
      </Text>
      <Text>App</Text> */}
      <Dashboard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
