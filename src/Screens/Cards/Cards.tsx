import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardsScreen: FC = () => {
  return (
    <View style={styles.content}>
      <Text> Here come soon content ! </Text>
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

export default CardsScreen;
