import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AccountsScreen: FC = () => {
  return (
    <View style={styles.content}>
      <Text>Accounts!</Text>
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

export default AccountsScreen;
