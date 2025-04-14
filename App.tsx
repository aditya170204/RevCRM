// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MainScreen from './src/screens/MainScreen';
// import Dashboard from './src/screens/Dashboard';
// import {NavigationContainer} from '@react-navigation/native';
// import FloatingButton from './src/components/FloatingButton';
// import Header from './src/components/Header';
// import {View} from 'react-native';

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <View>
//         <MainScreen />
//       </View>
//     </NavigationContainer>
//   );
// };

// export default App;

// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigator from './src/navigation/DrawerNavigator';
// import FloatingButton from './src/components/FloatingButton';
import {View, StyleSheet} from 'react-native';
import DrawerNavigator from './src/components/navigation/DrawerNavigator';
import FloatingButton from './src/components/FloatingButton';
import Header from './src/components/Header';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <View style={{flex: 1, marginTop: '9.6%'}}>
        <DrawerNavigator />

        <FloatingButton />
      </View>
    </NavigationContainer>
  );
};

export default App;
