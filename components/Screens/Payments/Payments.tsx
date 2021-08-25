import React from 'react';
import {View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default function PaymentsScreen() {
  return (
    <View style={styles.content}>
      <Text>Payments!</Text>
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
