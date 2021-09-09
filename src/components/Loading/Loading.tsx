import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.isLoading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  isLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
