// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const FloatingButton = () => {
//   const navigation = useNavigation();

//   return (
//     <View
//       style={{
//         height: 40,
//         width: 45,
//         backgroundColor: 'pink',
//         borderRadius: 10,
//         position: 'absolute',
//         top: '80%',
//         right: '7%',
//       }}>
//       <TouchableOpacity onPress={console.log('ok boss')}>
//         <Text>menu</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FloatingButton;

// const styles = StyleSheet.create({});

// src/components/FloatingButton.js
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const FloatingButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Icon name="menu" color="pink" />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: '9%',
    right: '5%',
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 14,
    elevation: 5,
    height: 40,
    width: 45,
  },
});
