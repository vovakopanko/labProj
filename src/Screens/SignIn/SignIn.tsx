import React from 'react';
// import {View, Text} from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.content}>
      <Text> Here your information about Saving </Text>
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
