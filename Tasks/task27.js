import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const images = [
  require('../Resource/images/imagelogo.png'),
  require('../Resource/images/imagelogo1.jpg'),
  require('../Resource/images/imagelogo2.jpg'),
];

const Task27 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  const chooseImage = (index) => {
    setSelected(index);
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button title="Choose image" onPress={() => setModalVisible(true)} />

        {selected !== null && (
          <Image style={styles.image} source={images[selected]} />
        )}

        {modalVisible && (
          <View style={styles.overlay}>
            <View style={styles.dialog}>
              <Text style={styles.title}>Choose an image</Text>
              <Text style={styles.message}>Which image do you want to display?</Text>

              {images.map((_, index) => (
                <Pressable
                  key={index}
                  style={styles.dialogButton}
                  onPress={() => chooseImage(index)}
                >
                  <Text style={styles.dialogButtonText}>Image {index + 1}</Text>
                </Pressable>
              ))}

              <Pressable
                style={styles.dialogButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.dialogButtonText, styles.cancelText]}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialog: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    marginBottom: 12,
  },
  dialogButton: {
    paddingVertical: 12,
  },
  dialogButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  cancelText: {
    color: 'red',
  },
});

export default Task27;
