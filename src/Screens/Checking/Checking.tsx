import React, {FC} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useCheking} from '../../hook/checkingHook';
import TotalCashUser from './TotalCashUser';
import TransactionsUser from './TransactiomsUser';

// type typeP = {
//   title: string;
//   subtitle: string;
//   cost: number;
//   deposit: boolean;
//   specialDeposit: boolean;
// };

const ChekingScreen: FC = () => {
  const {userTransactions} = useCheking();
  return (
    <View style={styles.content}>
      <View style={styles.checkingTotalCash}>
        <TotalCashUser />
        <Text style={styles.checkingTotalCash__subtitle}>
          Total avaliable cash
        </Text>
      </View>
      <View style={styles.checkingSearch__searchBlock}>
        <TextInput
          secureTextEntry={false}
          placeholder="Search transactions"
          onChangeText={(data: string) =>
            Alert.alert(`Your transaction: ${data}`)
          }
          style={styles.searchBlock__inputText}
        />
        <TouchableOpacity
          style={styles.searchBlock__btnSearch}
          onPress={() => console.log('Here you saw information')}>
          <Text style={styles.searchBlock__btnSearch_title}>Filter by</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkingTotalCash__transactionsData}>
        <FlatList
          data={userTransactions}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TransactionsUser date={item.date} data={item.data} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  checkingTotalCash: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  checkingTotalCash__sum: {
    fontSize: 24,
  },
  checkingTotalCash__sum_textAfterPoin: {
    fontSize: 18,
  },
  checkingTotalCash__subtitle: {
    color: '#808080',
  },
  checkingSearch__searchBlock: {
    flexDirection: 'row',
  },
  searchBlock__inputText: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#d3d3d3',
    padding: 5,
    width: '60%',
    backgroundColor: '#f8f8ff',
  },
  searchBlock__btnSearch: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginLeft: 10,
  },
  searchBlock__btnSearch_title: {
    color: '#808080',
    fontFamily: 'SFProRounded-Light',
    textAlign: 'center',
  },
  checkingTotalCash__transactionsData: {
    width: '85%',
    marginTop: 10,
    flex: 1,
    paddingBottom: 30,
  },
});

export default ChekingScreen;
