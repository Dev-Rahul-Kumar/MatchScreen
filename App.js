

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MatchScreen4 from './component/MatchScreen4';






const App = () => {


  return (
    <MatchScreen4/>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: '#87cefa'

  }
});

export default App;
