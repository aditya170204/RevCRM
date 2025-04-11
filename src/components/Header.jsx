import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#9A4D49',
        // borderWidth: 1,
        // borderColor: 'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginTop: '10%',
      }}>
      <View style={{width: '15%'}}>
        <View
          style={{
            backgroundColor: 'yellow',
            height: 50,
            width: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>profile</Text>
        </View>
      </View>
      <View style={{width: '70%', alignItems: 'start'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Hi Admin
        </Text>
      </View>
      <View style={{width: '15%', backgroundColor: 'orange'}}>
        <Text>Bell</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
