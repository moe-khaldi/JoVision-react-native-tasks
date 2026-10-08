import React, { useState } from 'react';
import {  StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';

const Task26 = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const getIP = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setText(data.ip);
      } catch (error) {
        console.error(error);
        }
    };
    const getIP2= () => {
        setLoading(true);
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setText(data.ip))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
    return (
       
  <View style={styles.container}>
    <Button title="Get IP (non-blocking)" onPress={getIP} />
    <Button title="Get IP (blocking)" onPress={getIP2} />

  <Text>{text}</Text>

  {loading && (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" />
    </View>
  )}
  </View>);
  }
  const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

  export default Task26;
  