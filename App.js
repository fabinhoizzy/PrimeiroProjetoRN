import React from 'react';
import { SafeAreaView,View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text>Olá Mundo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page:{
    width:200,
    height:200,
    backgroundColor:'#FF0000'
  }  
});











