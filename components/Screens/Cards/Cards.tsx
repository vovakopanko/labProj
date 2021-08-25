import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default function CardsScreen({navigation}: any) {
  return (
    <View style={styles.content}>
      <Text>Cards!</Text>
      <Button
        title="Go to Home Page"
        onPress={() => {
          navigation.navigate('Checking');
        }}
      />
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
