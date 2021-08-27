import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function GivingScreen() {
  return (
    <View style={styles.content}>
      <Text> Here comen soon content ! </Text>
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
