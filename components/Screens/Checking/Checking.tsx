import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ChekingScreen() {
  return (
    <View style={styles.content}>
      <Text>Cheking!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
