// src/screens/Leads.js
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import LeadContainer from '../myComponents/LeadContainer';

const Leads = () => (
  // return(
  <>
    <View>
      <Header />
    </View>
    <ScrollView
      style={{
        // backgroundColor: 'grey',
        width: '93%',
        marginLeft: '3%',
        borderRadius: 5,
        marginVertical: 10,
      }}>
      <LeadContainer name={'Aadi'} mail={'adi@17'} />
      <LeadContainer name={'Aadi yadav'} mail={'adi@17rajyadav'} />
      <LeadContainer
        name={'raj Aadiya yadav ahir'}
        mail={'adi@17feb0912gmail.com'}
      />
      <LeadContainer
        name={'Aaditya vikram yadav'}
        mail={'adi@17vikramaditya'}
      />
      <LeadContainer
        name={'yadav aditya ahir bahubali bhaukaal '}
        mail={'adi@17yadav aditya ahir bahubali bhaukaal'}
      />
    </ScrollView>
  </>
);

export default Leads;

const styles = StyleSheet.create({});
