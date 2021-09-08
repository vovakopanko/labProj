import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useAccount} from '../../hook/accountHook';

const TotalCashUser = () => {
  const {actionsWithCash} = useAccount();
  const total = actionsWithCash
    .map(s => s.cash)
    .reduce((sum, current) => sum + current);
  let totalCash: Array<string> = total.toFixed(2).split('.');
  return (
    <Text style={styles.overView_totalCash}>
      <Text>${totalCash[0]}.</Text>
      <Text style={styles.numberAfterPoin}>{totalCash[1]}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  overView_totalCash: {
    textAlign: 'center',
    fontFamily: 'SFProRounded-Bold',
    fontWeight: '400',
    fontSize: 24,
    paddingTop: 5,
  },
  numberAfterPoin: {
    fontSize: 16,
  },
});

export default TotalCashUser;
