// src/navigation/DrawerNavigator.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../screens/Dashboard';
import Leads from '../../screens/Leads';
import Meetings from '../../screens/Meetings';
import Booking from '../../screens/Bookings';
import Header from '../Header';
// import Dashboard from '../screens/Dashboard';
// import Leads from '../screens/Leads';
// import Bookings from '../screens/Bookings';
// import Meetings from '../screens/Meetings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Leads"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        // options={() => <Header />}
      />
      <Drawer.Screen name="Leads" component={Leads} />
      <Drawer.Screen name="Bookings" component={Booking} />
      <Drawer.Screen name="Meetings" component={Meetings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
