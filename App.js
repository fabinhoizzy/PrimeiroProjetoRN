import React from 'react';
import { SafeAreaView,View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:blue;
`;

const Texto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
  background-color:black;

`;

export default () => {
  return (
    <Page>
      <Texto cor="red">Texto De Exemplo</Texto>
      <Texto cor="yellow">Texto De Exemplo</Texto>
    </Page>
  );
}













