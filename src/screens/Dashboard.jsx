import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {myColor} from '../myComponents/myColor';

import Header from '../components/Header';

const Dashboard = () => {
  const theme = useColorScheme();

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme === 'dark' ? myColor.light : myColor.dark,
          }}>
          Dashboard
        </Text>
      </View>
      <View>{/* <ProfileArea /> */}</View>
      <Header />
      <View
        style={{
          // backgroundColor: 'grey',
          width: '93%',
          marginLeft: '3%',
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <View
          style={{
            // backgroundColor: 'grey',
            // width: '90%',
            // marginLeft: '5%',
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#ADADAD',
            marginVertical: 15,
          }}>
          <View style={{paddingLeft: '5%', width: '95%'}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>FOS</Text>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#75332F'}}>
                100,000
              </Text>
            </View>
            <View style={{borderWidth: 0.6}} />
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>FOS</Text>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#75332F'}}>
                100,000
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'grey',
            // width: '90%',
            // marginLeft: '5%',
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: '#ADADAD',
            marginVertical: 15,
          }}>
          <View style={{paddingLeft: '5%', width: '95%'}}>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>FOS</Text>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#75332F'}}>
                100,000
              </Text>
            </View>
            <View style={{borderWidth: 0.6}} />
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>FOS</Text>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#75332F'}}>
                100,000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
