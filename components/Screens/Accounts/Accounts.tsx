import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AccountsScreen() {
  return (
    <View style={styles.content}>
      <Text>Accounts!</Text>
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
