import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TransactionsUser = {
  title: string;
  subtitle: string;
  cash: number;
};

const TransactionsUser = ({title, subtitle, cash}: TransactionsUser) => {
  let val: Array<string> = cash.toFixed(2).split('.');
  return (
    <View style={styles.allTransaction__transaction}>
      <View style={styles.allTransaction__transaction_title}>
        <Text style={styles.transaction_title}>{title}</Text>
        <Text style={styles.transaction_subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.allTransaction__transaction_value}>
        <Text style={styles.allTransaction__transaction_color}>
          ${val[0]}.
          <Text style={styles.allTransaction__transaction_fontSize}>
            {val[1]}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allTransaction__transaction: {
    paddingVertical: 12,
    flexDirection: 'row',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  allTransaction__transaction_title: {
    width: '60%',
    paddingLeft: '4%',
  },
  allTransaction__transaction_value: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '40%',
    paddingRight: '4%',
  },
  allTransaction__transaction_color: {
    color: '#008000',
    fontSize: 18,
    fontWeight: '300',
  },
  transaction_title: {
    fontSize: 17,
    color: '#008000',
  },
  transaction_subtitle: {
    fontSize: 12,
    color: '#808080',
  },
  allTransaction__transaction_fontSize: {
    fontSize: 16,
  },
});

export default TransactionsUser;
