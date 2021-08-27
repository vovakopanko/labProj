import React, {FC} from 'react';
// import {View, Text} from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

const SavingScreen: FC = () => {
  return (
    <View style={styles.content}>
      <Text> Here your information about Saving </Text>
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

export default SavingScreen;
