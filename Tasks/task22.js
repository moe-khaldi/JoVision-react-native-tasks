   import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import MyFunctionPage from '../Components/MyFunctionComponent_task22';

const Task21 = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            
          <Text> {text}   </Text>
          <MyFunctionPage onTextChange={setText} />
        </View>
      );


 

}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task21;
