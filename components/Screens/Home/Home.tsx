import React from 'react';
import {Image} from 'native-base';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';

// type ArrayInfoType = {
//   id: number;
//   name: string;
//   cash: number;
//   info: string;
// };

export default function HomeScreen() {
  const arrayInfo = [
    {id: 1, name: 'Checking', cash: 1500.2, info: 'Main account (...0353)'},
    {id: 2, name: 'Savings', cash: 5000.2, info: 'Buy a house (...4044)'},
    {id: 3, name: 'Goodness', cash: 500.4, info: 'Cash Rewards'},
  ];
  // const [arrayInfo, setArrayInfo] = useState<Array<ArrayInfoType>>([
  //   {id: 1, name: 'Checking', cash: 1500.2, info: 'Main account (...0353)'},
  //   {id: 2, name: 'Savings', cash: 5000.2, info: 'Buy a house (...4044)'},
  //   {id: 3, name: 'Goodness', cash: 500.4, info: 'Cash Rewards'},
  // ]);

  return (
    <View style={styles.homeBlock}>
      <Text style={styles.homeBlock_dataStyle}>
        Good Morning Danny | Jul 12, 2020
      </Text>
      <SafeAreaView>
        <ScrollView style={styles.homeBlock_content}>
          <View style={styles.content_accountData}>
            <Text style={styles.accountData_title}>Account Overview </Text>
            <Text style={styles.accountData_amountDeposited}>$7,000.80</Text>
            <Text style={styles.accountData_titleInfo}>
              Total Avaliable cash
            </Text>
            <View style={styles.accountData_payments}>
              {arrayInfo.map(info => (
                <View style={styles.payments_Items}>
                  <View style={styles.payments_Items__left}>
                    <Text>
                      {info.name} {'\n'}
                      <Text style={styles.payments_Items__weight}>
                        {info.info}
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.payments_Items__right}>
                    <Text style={styles.payments_Items__right}>
                      ${info.cash.toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.content_givingImpact}>
            <View style={styles.givingImpact_block}>
              <View style={styles.givingImpact_block__left}>
                {/* <Image
                  alt="avatar"
                  source={require('./../../../assets/projectImages/avatar.png')}
                  style={styles.iconImg}
                /> */}
              </View>
              <View style={styles.givingImpact_block__right}>
                <Text>Your Giving Impact {'\n'} St Jude * 4 hrs ago</Text>
              </View>
            </View>
            {/* <Image
              alt="proto"
              source={require('./../../../assets/projectImages/rectangle2.png')}
              style={styles.iconImg}
            /> */}
            <Text style={styles.givingImpact_description}>
              Danny, Your donatio helped 5 amazing kids get much needed cancer
              surgery, thanks fo being...
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeBlock: {
    margin: 10,
  },
  iconImg: {
    width: '100%',
    height: 200,
  },
  homeBlock_dataStyle: {
    marginBottom: 10,
  },
  homeBlock_content: {
    height: '100%',
  },
  content_accountData: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  content_givingImpact: {
    backgroundColor: 'white',
  },
  givingImpact_block: {
    flexDirection: 'row',
    padding: 10,
  },
  givingImpact_block__left: {
    alignItems: 'flex-start',
  },
  givingImpact_block__right: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 5,
  },
  givingImpact_description: {
    padding: 10,
  },
  accountData_title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  accountData_amountDeposited: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 24,
    paddingTop: 5,
  },
  accountData_titleInfo: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 14,
    marginBottom: 20,
  },
  accountData_payments: {},
  payments_Items: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
  },
  payments_Items__left: {
    alignItems: 'flex-start',
    width: '50%',
    fontWeight: '400',
  },
  payments_Items__right: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '60%',
    fontSize: 18,
    fontWeight: '600',
  },
  payments_Items__weight: {
    fontWeight: '200',
  },
});