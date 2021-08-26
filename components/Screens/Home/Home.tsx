import * as React from 'react';
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

const arrayInfo = [
  {id: 1, name: 'Checking', cash: 1500.2, info: 'Main account (...0353)'},
  {id: 2, name: 'Saving', cash: 5000.2, info: 'Buy a house (...4044)'},
  {id: 3, name: 'Goodness', cash: 500.4, info: 'Cash Rewards'},
];

const ActionsUser = ({name, info, cash, navigation}: any) => {
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor="lightgrey"
      onPress={() => navigation.navigate(`${name}`)}>
      <View style={styles.overView_actionsUser}>
        <View style={styles.actionsUser_Info}>
          <Text style={styles.actionsUser_name}>{name}</Text>
          <Text style={styles.actionsUser_card}>{info}</Text>
        </View>
        <View style={styles.overView_providedCash}>
          <Text style={styles.providedCash_count}>${cash.toFixed(2)}</Text>
          {/* <Image
            source={require('./../../../assets/projectImages/back.png')}
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
        <Text>Good Morning Danny | Jul 12, 2020</Text>
      </View>
      <View style={styles.homePage_overView}>
        <Text style={styles.overView_title}>Account Overview </Text>
        <Text style={styles.overView_totalCash}>$7,000.80</Text>
        <Text style={styles.overView_subTitle}>Total Available cash</Text>
        {arrayInfo.map(info => (
          <ActionsUser
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
              source={require('./../../../assets/projectImages/avatar.png')}
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
              source={require('./../../../assets/projectImages/rectangle2.png')}
              style={styles.blockGivingImpact_photo}
            />
          </View>
          <View style={styles.blockGivingImpact_info}>
            <Text>
              Danny, Your donation helped 5 amazing kids get much needed cancer
              surgery, thanks fo being...
            </Text>
          </View>
        </View>
        <View style={styles.blockGivingImpact}>
          <View style={styles.blockGivingImpact_blockTitle}>
            <Image
              source={require('./../../../assets/projectImages/avatar.png')}
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
              source={require('./../../../assets/projectImages/rectangle2.png')}
              style={styles.blockGivingImpact_photo}
            />
          </View>
          <View style={styles.blockGivingImpact_info}>
            <Text>
              Danny, Your donation helped 5 amazing kids get much needed cancer
              surgery, thanks fo being...
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    margin: 20,
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
    // fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
  },
  overView_totalCash: {
    textAlign: 'center',
    // fontWeight: '300',
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
  },
  actionsUser_card: {
    fontWeight: '400',
    paddingLeft: 10,
    color: 'grey',
  },
  overView_providedCash: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '50%',
    paddingRight: 20,
    // fontWeight: '600',
  },
  providedCash_count: {
    fontSize: 19,
  },
  blockGivingImpact: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
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
    fontSize: 12,
    color: 'grey',
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
});

export default HomeScreen;
