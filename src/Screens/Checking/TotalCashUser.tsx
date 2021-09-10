import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useChecking} from '../../hook/checkingHook';

const TotalCashUser = () => {
  const {totalCash} = useChecking();
  let costTransaction: Array<string> = totalCash.toFixed(2).split('.');
  return (
    <Text style={styles.overView_totalCash}>
      <Text>${costTransaction[0]}.</Text>
      <Text style={styles.numberAfterPoint}>{costTransaction[1]}</Text>
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
  numberAfterPoint: {
    fontSize: 16,
  },
});

export default TotalCashUser;
