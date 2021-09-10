import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useSavings} from '../../hook/savingsHook';
import TotalCashUser from './TotalCashUser';
import TransactionsUser from './TransactionsUser';

const SavingScreen: FC = () => {
  const {graph, goodnessPoints, totalInterestGained, data, transactionsRaws} =
    useSavings();
  return (
    <View style={styles.content}>
      <View style={styles.checkingTotalCash__block}>
        <View style={styles.checkingTotalCash}>
          <TotalCashUser />
          <Text style={styles.checkingTotalCash__subtitle}>
            Total available cash
          </Text>
        </View>
      </View>
      <Image source={graph} style={styles.checkingTotalCash__graph} />
      <View>
        <View style={styles.savingTransactions__bonus}>
          <Text style={styles.savingTransactions__bonus_blockLeft}>
            Total interest gained
          </Text>
          <Text style={styles.savingTransactions__bonus_blockRight}>
            +${totalInterestGained.toFixed(2)}
          </Text>
        </View>
        <View style={styles.savingTransactions__goodness}>
          <Text style={styles.savingTransactions__bonus_blockLeft}>
            Goodness points Gained
          </Text>
          <Text style={styles.savingTransactions__bonus_blockRight}>
            +{goodnessPoints}
          </Text>
        </View>
      </View>
      <View style={styles.savingTransactions__searchBlock}>
        <TextInput
          secureTextEntry={false}
          placeholder="Search transactions"
          onChangeText={(dataText: string) =>
            Alert.alert(`Your transaction: ${dataText}`)
          }
          style={styles.savingTransactions_inputText}
        />
        <TouchableOpacity
          style={styles.searchBlock__btnSearch}
          onPress={() => console.log('Here you saw information')}>
          <Text style={styles.searchBlock__btnSearch_title}>Filter by</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.savingTransactions__allTransaction}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.allTransaction__generalInfo}>
                <Text style={styles.allTransaction__generalInfo_title}>
                  End day balance - {data}
                </Text>
                <Text style={styles.allTransaction__generalInfo_value}>
                  $5.000
                </Text>
              </View>
            }
            data={transactionsRaws}
            renderItem={({item}) => (
              <TransactionsUser
                title={item.title}
                subtitle={item.subtitle}
                cash={item.cash}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  checkingTotalCash__block: {
    width: '100%',
    backgroundColor: 'white',
  },
  checkingTotalCash: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  checkingTotalCash__subtitle: {
    color: '#808080',
  },
  checkingTotalCash__graph: {
    height: 200,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  savingTransactions: {
    alignItems: 'center',
    width: '100%',
  },
  savingTransactions__searchBlock: {
    flexDirection: 'row',
    marginVertical: '4%',
  },
  savingTransactions_inputText: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#d3d3d3',
    padding: 5,
    width: '60%',
    backgroundColor: '#ffffff',
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
  },
  savingTransactions__bonus: {
    flexDirection: 'row',
    paddingTop: '2%',
  },
  savingTransactions__bonus_blockLeft: {
    width: '70%',
    paddingLeft: '10%',
    fontSize: 16,
    paddingVertical: '2%',
  },
  savingTransactions__bonus_blockRight: {
    width: '22%',
    textAlign: 'right',
    fontSize: 16,
    paddingVertical: '2%',
    color: '#008000',
  },
  savingTransactions__goodness: {
    flexDirection: 'row',
  },
  savingTransactions__allTransaction: {
    flex: 1,
    width: '85%',
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  allTransaction__generalInfo: {
    paddingVertical: 12,
    flexDirection: 'row',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  allTransaction__generalInfo_title: {
    width: '60%',
    fontSize: 11,
    fontWeight: '300',
    paddingLeft: '4%',
  },
  allTransaction__generalInfo_value: {
    textAlign: 'right',
    width: '40%',
    fontSize: 12,
    paddingRight: '4%',
  },
});

export default SavingScreen;
