   import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import MyFunctionPage from '../Components/MyFunctionComponent_task21';

const Task21 = () => {
    const [showPage, setShowPage] = useState(false);
    return (
        <View style={styles.container}>
            
            <Button title={showPage ? "Hide" : "Show"} onPress={() => setShowPage(!showPage)} />
                 {showPage ? <MyFunctionPage /> : null}
        </View>
      );




}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task21;
