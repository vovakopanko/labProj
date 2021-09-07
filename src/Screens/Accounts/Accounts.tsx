import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useAccount} from '../../hook/accountHook';
import ActionsUser from './ActionsUser';

const screenWidth = Dimensions.get('screen').width;

const AccountsScreen: FC = ({navigation}: any) => {
  const {actionsWithCash, typesOfPayments} = useAccount();
  const TotalCashUser = () => {
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

  return (
    <View style={styles.homePage}>
      <View style={styles.homePage_overView}>
        <TotalCashUser />
        <Text style={styles.overView_subTitle}>Total Available cash</Text>
        <View style={styles.overView_cashActions}>
          {typesOfPayments.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Alert.alert(`You click ${item.paymentName}`)}>
              <Image
                source={item.paymentImage}
                style={styles.cashActions_image}
              />
              <Text style={styles.cashActions_text}>{item.paymentName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={actionsWithCash}
          renderItem={({item}) => (
            <ActionsUser
              name={item.name}
              info={item.info}
              cash={item.cash}
              icon={item.icon}
              clickDisabled={item.clickDisabled}
              savedCash={item.savedCash}
              navigation={navigation}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  homePage_overView: {
    paddingTop: '5%',
  },
  overView_totalCash: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 29,
    paddingTop: 5,
  },
  overView_subTitle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    marginBottom: 20,
  },
  overView_cashActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%',
  },
  cashActions_image: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
  },
  cashActions_text: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'grey',
  },
  overView_actionsUser: {
    flexDirection: 'row',
  },
  actionsUser__chevron: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  blockGivingImpact: {
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    fontFamily: 'SFProRounded-Bold',
    marginBottom: 10,
  },
  blockGivingImpact_blockTitle: {
    padding: 10,
    flexDirection: 'row',
  },
  blockTitle_infoGivingImpact: {
    marginLeft: 10,
  },
  blockGivingImpact_nameUser: {
    fontWeight: '600',
  },
  infoGivingImpact_title: {},
  infoGivingImpact_activity: {
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
  },
  numberAfterPoin: {
    fontSize: 16,
  },
  homePage_givingImpact: {
    paddingBottom: 10,
  },
  blockGivingImpact__shareBtn: {alignItems: 'center', marginBottom: 10},
  blockGivingImpact__shareBtn_dimensions: {
    backgroundColor: 'mediumvioletred',
    flexDirection: 'row',
    width: screenWidth * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },
  blockGivingImpact__shareBtn_icon: {width: 15, height: 15, marginRight: 10},
  blockGivingImpact__shareBtn_text: {color: 'white'},
  backgroundVideo: {
    width: '100%',
    height: Platform.OS === 'ios' ? 220 : '40%',
  },
  btn__MuteVideo: {
    position: 'absolute',
    bottom: 20,
    right: '3%',
    opacity: 0.6,
  },
  btn__MuteVideo_size: {
    height: 20,
    width: 20,
  },
  btn__FullScreen: {
    position: 'absolute',
    bottom: 20,
    right: '90%',
    opacity: 0.6,
  },
  btn__MuteVideo_fullscreen: {
    height: 20,
    width: 20,
  },
});

export default AccountsScreen;
