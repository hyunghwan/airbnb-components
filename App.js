import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  }
});
