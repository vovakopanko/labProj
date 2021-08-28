import React from 'react';
import {
  StyleSheet,
  // SafeAreaView,
  ScrollView,
  // Button,
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

type ActionsUser = {
  name: string;
  info: string;
  cash: number;
  navigation: any;
};

type ArrayInfoType = {
  id: number;
  name: string;
  info: string;
  cash: number;
};

const arrayInfo: ArrayInfoType[] = [
  {id: 1, name: 'Checking', cash: 1500.2, info: 'Main account (...0353)'},
  {id: 2, name: 'Saving', cash: 5000.2, info: 'Buy a house (...4044)'},
  {id: 3, name: 'Goodness', cash: 500.4, info: 'Cash Rewards'},
];

const ActionsUser = ({name, info, cash, navigation}: ActionsUser) => {
  let val: Array<string> = [];
  val = cash.toFixed(2).split('.');

  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor="lightgrey"
      onPress={() =>
        navigation.navigate(`${name}`, {
          info: info,
          name: name,
        })
      }>
      <View style={styles.overView_actionsUser}>
        <View style={styles.actionsUser_Info}>
          <Text style={styles.actionsUser_name}>{name}</Text>
          <Text style={styles.actionsUser_card}>{info}</Text>
        </View>
        <View style={styles.overView_providedCash}>
          <Text style={styles.providedCash_count}>
            $<Text>{val[0]}.</Text>
            <Text style={styles.numberAfterPoin}>{val[1]}</Text>
          </Text>
          {/* <Image
            source={require('../../../assets/projectImages/back.png')}
            style={{width: 10, height: 10, backgroundColor: 'red'}}
          /> */}
        </View>
      </View>
    </TouchableHighlight>
  );
};

function HomeScreen({navigation}: any) {
  return (
    <View style={styles.homePage}>
      <View style={styles.homePage_greetingUser}>
        <Text style={styles.homePage_titleGreating}>
          Good Morning Danny | Jul 12, 2020
        </Text>
      </View>
      <View style={styles.homePage_overView}>
        <Text style={styles.overView_title}>Account Overview </Text>
        <Text style={styles.overView_totalCash}>$7,000.80</Text>
        <Text style={styles.overView_subTitle}>Total Available cash</Text>
        {arrayInfo.map(info => (
          <ActionsUser
            key={info.id}
            name={info.name}
            info={info.info}
            cash={info.cash}
            navigation={navigation}
          />
        ))}
      </View>
      <ScrollView>
        <View style={styles.blockGivingImpact}>
          <View style={styles.blockGivingImpact_blockTitle}>
            <Image
              source={require('./../../assets/projectImages/avatar.png')}
              style={styles.blockTitle_avatar}
            />
            <View style={styles.blockTitle_infoGivingImpact}>
              <Text style={styles.infoGivingImpact_title}>
                Your Giving Impact
              </Text>
              <Text style={styles.infoGivingImpact_activity}>
                St Jude * 4 hrs ago
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require('./../../assets/projectImages/rectangle2.png')}
              style={styles.blockGivingImpact_photo}
            />
          </View>
          <View style={styles.blockGivingImpact_info}>
            <Text style={styles.blockGivingImpact_info_text}>
              Danny, Your donation helped 5 amazing kids get much needed cancer
              surgery, thanks fo being...
            </Text>
          </View>
        </View>
      </ScrollView>
      <Text>dgsdfgsfd</Text>
    </View>
  );
}

type Font = 'SFProRounded-Regular' | 'SFProRounded-Bold' | 'SFProRounded-Light';

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    margin: 20,
  },
  homePage_titleGreating: {
    fontFamily: 'SFProRounded-Regular',
    color: 'grey',
  },
  homePage_greetingUser: {
    marginBottom: 10,
  },
  homePage_overView: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    marginBottom: 20,
  },
  overView_title: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 20,
    fontFamily: 'SFProRounded-Bold',
  },
  overView_totalCash: {
    textAlign: 'center',
    fontFamily: 'SFProRounded-Bold',
    fontWeight: '400',
    fontSize: 24,
    paddingTop: 5,
  },
  overView_subTitle: {
    textAlign: 'center',
    // fontWeight: '200',
    color: 'grey',
    fontSize: 12,
    marginBottom: 20,
  },
  overView_actionsUser: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
  },
  actionsUser_Info: {
    alignItems: 'flex-start',
    width: '50%',
  },
  actionsUser_name: {
    fontWeight: '400',
    paddingLeft: 10,
    fontFamily: 'SFProRounded-Bold',
  },
  actionsUser_card: {
    fontWeight: '400',
    paddingLeft: 10,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  overView_providedCash: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '50%',
    paddingRight: 20,
    fontFamily: 'SFProRounded-Bold',
  },
  providedCash_count: {
    fontSize: 19,
  },
  blockGivingImpact: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    fontFamily: 'SFProRounded-Bold',
  },
  blockGivingImpact_blockTitle: {
    padding: 10,
    flexDirection: 'row',
  },
  blockTitle_infoGivingImpact: {
    marginLeft: 10,
  },
  infoGivingImpact_title: {
    // fontWeight: '600',
  },
  infoGivingImpact_activity: {
    // fontSize: 12,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  blockTitle_avatar: {
    width: 40,
    height: 40,
  },
  blockGivingImpact_photo: {
    width: '100%',
  },
  blockGivingImpact_info: {
    padding: 10,
  },
  blockGivingImpact_info_text: {
    fontFamily: 'SFProRounded-Light',
  } as {fontFamily: Font},
  numberAfterPoin: {
    fontSize: 16,
  },
});

export default HomeScreen;
