import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
    useEffect(() => { console.log('MyFunctionPage mounted (shown)'); return () => { console.log('MyFunctionPage unmounted (hidden)'); }; }, []);
    return (
        <View style={styles.page}>
            <Text style={styles.text}>This is MyFunctionPage</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  page: { marginTop: 20 },
  text: { fontSize: 22, fontWeight: 'bold' },
});

export default MyFunctionPage;