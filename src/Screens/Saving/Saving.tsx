import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSavings} from '../../hook/savingsHook';
import TotalCashUser from './TotalCashUser';

const SavingScreen: FC = () => {
  const {graph, goodnessPoints, totalInterestGained} = useSavings();
  console.log(goodnessPoints, totalInterestGained);
  return (
    <View style={styles.content}>
      <View style={styles.checkingTotalCash}>
        <TotalCashUser />
        <Text style={styles.checkingTotalCash__subtitle}>
          Total avaliable cash
        </Text>
      </View>
      <Image source={graph} style={{height: 200, width: '100%'}} />
      <View style={styles.savingTransactions}>
        <View>
          <Text>Total interest gained</Text>
          <Text>+$50.50{totalInterestGained}</Text>
        </View>
        <View>
          <Text>Goodness points Gained</Text>
          <Text>+600{goodnessPoints}</Text>
        </View>
        <View style={styles.savingTransactions__searchBlock}>
          <TextInput
            secureTextEntry={false}
            placeholder="Search transactions"
            onChangeText={(data: string) =>
              Alert.alert(`Your transaction: ${data}`)
            }
            style={styles.savingTransactions_inputText}
          />
          <TouchableOpacity
            style={styles.searchBlock__btnSearch}
            onPress={() => console.log('Here you saw information')}>
            <Text style={styles.searchBlock__btnSearch_title}>Filter by</Text>
          </TouchableOpacity>
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
  checkingTotalCash: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  checkingTotalCash__subtitle: {
    color: '#808080',
  },
  savingTransactions: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  savingTransactions__searchBlock: {
    flexDirection: 'row',
  },
  savingTransactions_inputText: {
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
  checkingTotalCash: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  checkingTotalCash__subtitle: {
    color: '#808080',
  },
});

export default SavingScreen;
