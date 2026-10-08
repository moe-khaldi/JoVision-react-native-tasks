import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>This is MyClassPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: { marginTop: 20 },
  text: { fontSize: 22, fontWeight: 'bold' },
});