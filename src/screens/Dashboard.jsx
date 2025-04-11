// import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
// import React from 'react';

// import FosContainer from '../myComponents/FosContainer';

// const Dashboard = () => {
//   // const theme = useColorScheme();

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       {/* <Header /> */}

//       <FosContainer />
//       <FosContainer />
//       <FosContainer />
//       <FosContainer />
//       <FosContainer />
//     </ScrollView>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({});

// src/screens/Dashboard.js
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FosContainer from '../myComponents/FosContainer';
import Header from '../components/Header';
// import {ScrollView} from 'react-native-gesture-handler';

const Dashboard = () => (
  <ScrollView>
    {/* <Text style={styles.text}>Dashboard Screen</Text> */}
    <FosContainer />
    <FosContainer />
    <FosContainer />
  </ScrollView>
);

export default Dashboard;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24},
});
