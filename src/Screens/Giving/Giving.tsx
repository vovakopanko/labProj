import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GivingScreen: FC = () => {
  return (
    <View style={styles.content}>
      <Text> Here comen soon content ! </Text>
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

export default GivingScreen;
