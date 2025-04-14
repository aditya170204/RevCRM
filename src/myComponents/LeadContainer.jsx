import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LeadContainer = ({name, mail}) => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        padding: 12,
        borderRadius: 7,
        marginVertical: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: '10%', backgroundColor: 'blue'}}>
          <View
            style={{
              backgroundColor: 'red',
              height: 35,
              width: 35,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'Bold',
                fontSize: 25,
                color: 'white',
              }}>
              A
            </Text>
          </View>
        </View>
        <View style={{width: '43%', backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>Lead Name:</Text>
          <Text style={{fontSize: 14}}>{name}</Text>
        </View>
        <View style={{width: '43%', backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>Email Address:</Text>
          <Text style={{fontSize: 14}}>{mail}</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 5,
          borderStyle: 'dashed',
          borderTopWidth: 1,
          backgroundColor: 'orange',
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            backgroundColor: 'red',
          }}>
          details
        </Text>
        <Text
          style={{
            backgroundColor: 'red',
          }}>
          Arrow
        </Text>
      </View>
    </View>
  );
};

export default LeadContainer;

const styles = StyleSheet.create({});
