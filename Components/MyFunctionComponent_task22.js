import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage = ({ onTextChange }) => {
    return (
        <View style={styles.page}>
            <TextInput
                style={styles.text}
                placeholder="Enter text..."
                onChangeText={onTextChange}
            />
        </View>
    );
};
const styles = StyleSheet.create({
  page: { marginTop: 20 },
  text: { fontSize: 22, fontWeight: 'bold' },
});

export default MyFunctionPage;