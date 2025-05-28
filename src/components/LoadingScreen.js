import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0066CC" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});

export default LoadingScreen;
