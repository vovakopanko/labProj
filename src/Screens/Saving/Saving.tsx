import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSavings} from '../../hook/savingsHook';
import TotalCashUser from './TotalCashUser';

const SavingScreen: FC = () => {
  const {graph} = useSavings();
  console.log(graph);
  return (
    <View style={styles.content}>
      <View style={styles.checkingTotalCash}>
        <TotalCashUser />
        <Text style={styles.checkingTotalCash__subtitle}>
          Total avaliable cash
        </Text>
      </View>
      <Image source={graph} style={{height: 200, width: '100%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkingTotalCash: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  checkingTotalCash__subtitle: {
    color: '#808080',
  },
});

export default SavingScreen;
