import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type dataTransactions = {
  title: string;
  subtitle: string;
  cost: number;
  deposit: boolean;
  specialDeposit: boolean;
};

type TransactionsUserType = {
  date: string;
  data: dataTransactions[];
};

const TransactionsUser = ({date, data}: TransactionsUserType) => {
  return (
    <View>
      <View style={styles.transactionsData__date}>
        <Text style={styles.transactionsData__date_text}>{date}</Text>
      </View>
      {data.map(d => (
        <View style={styles.transactionsData__raws}>
          <View style={styles.transactionsData__raws_leftSide}>
            <View>
              {d.specialDeposit && (
                <Image
                  source={require('../../assets/projectImages/confetti2.png')}
                  style={styles.transactions__specialImage}
                />
              )}
            </View>
            <View>
              <View>
                <Text
                  style={
                    d.specialDeposit
                      ? styles.transactionsData__raws_titleSpec
                      : d.deposit
                      ? styles.transactionsData__raws_titleSpec
                      : styles.transactionsData__raws_title
                  }>
                  {d.title}
                </Text>
              </View>
              <View>
                <Text
                  style={
                    !d.specialDeposit
                      ? styles.transactionsData__raws_subtitle
                      : styles.transactionsData__raws_special
                  }>
                  {d.subtitle}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.transactionsData__raws_rightSide}>
            <Text
              style={
                d.specialDeposit
                  ? styles.rightSide__cashSpecial
                  : d.deposit
                  ? styles.rightSide__cashSpecial
                  : styles.rightSide__cash
              }>
              $
              <Text>
                {`${d.cost.toFixed(2).split('.')[0]}.`}
                <Text style={styles.rightSide__cost}>{`${
                  d.cost.toFixed(2).split('.')[1]
                }`}</Text>
              </Text>
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsData__date: {
    padding: '3%',
  },
  transactionsData__date_text: {
    fontSize: 14,
  },
  transactionsData__raws: {
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    padding: '3%',
  },
  transactionsData__raws_leftSide: {
    width: '60%',
    flexDirection: 'row',
  },
  transactions__specialImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  transactionsData__raws_title: {
    fontWeight: '500',
  },
  transactionsData__raws_titleSpec: {
    fontWeight: '500',
    color: 'green',
  },
  transactionsData__raws_subtitle: {
    color: 'grey',
  },
  transactionsData__raws_special: {
    color: 'green',
  },
  transactionsData__raws_rightSide: {
    width: '40%',
    justifyContent: 'center',
  },
  rightSide__cash: {
    textAlign: 'right',
    fontSize: 18,
  },
  rightSide__cashSpecial: {
    textAlign: 'right',
    fontSize: 18,
    color: 'green',
  },
  rightSide__cost: {
    fontSize: 15,
    alignItems: 'center',
  },
});

export default TransactionsUser;
