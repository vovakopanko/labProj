import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChekingScreen: FC = () => {
  return (
    <View style={styles.content}>
      <Text>Here your information about Cheking!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChekingScreen;
