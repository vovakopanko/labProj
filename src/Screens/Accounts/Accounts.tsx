import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableHighlight,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useAccount} from '../../hook/accountHook';

const screenWidth = Dimensions.get('screen').width;

const AccountsScreen: FC = ({navigation}: any) => {
  const {actionsWithCash} = useAccount();
  const total = actionsWithCash
    .map(s => s.cash)
    .reduce((sum, current) => sum + current);
  let totalCash: Array<string> = [];
  totalCash = total.toFixed(2).split('.');

  type ActionsUserType = {
    name: string;
    info: string;
    icon: null | ImageSourcePropType;
    cash: number;
    savedCash: boolean;
    clickDisabled: boolean;
    navigation: any;
  };

  const ActionsUser = ({
    name,
    info,
    cash,
    navigation,
    savedCash,
    clickDisabled,
    icon,
  }: ActionsUserType) => {
    let val: Array<string> = [];
    val = cash.toFixed(2).split('.');
    return (
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor="lightgrey"
        style={styles.actionUser_block}
        disabled={clickDisabled}
        onPress={() =>
          navigation.navigate(`${name}`, {
            info: info,
            name: name,
          })
        }>
        <View style={styles.overView_actionsUser__block}>
          <View style={styles.overView_actionsUser}>
            <View style={styles.actionsUser_Info}>
              <View style={styles.actionsUser_name}>
                <Text style={styles.actionsUser_nameTitle}>{name}</Text>
                {icon ? (
                  <Image source={icon} style={styles.actionsUser_icon} />
                ) : null}
              </View>
              <Text style={styles.actionsUser_card}>{info}</Text>
            </View>
            <View style={styles.overView_providedCash}>
              <Text style={styles.providedCash_count}>
                $<Text>{val[0]}.</Text>
                <Text style={styles.numberAfterPoin}>{val[1]}</Text>
              </Text>
              <Image
                source={require('../../assets/projectImages/chevron.png')}
                style={styles.actionsUser__chevron}
              />
            </View>
          </View>
          {savedCash ? (
            <View>
              <Text style={styles.actionsUser__savedCash_text}>
                Savings is up 3% from last mounth
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableHighlight>
    );
  };

  type typesOfPaymentsType = {
    paymentName: string;
    paymentImage: ImageSourcePropType;
  };

  const typesOfPayments: typesOfPaymentsType[] = [
    {
      paymentName: 'Send',
      paymentImage: require('../../assets/projectImages/circleButtonSend.png'),
    },
    {
      paymentName: 'Play',
      paymentImage: require('../../assets/projectImages/circleButtonPay.png'),
    },
    {
      paymentName: 'Transfer',
      paymentImage: require('../../assets/projectImages/circleButtonChecking.png'),
    },
  ];

  return (
    <View style={styles.homePage}>
      <View style={styles.homePage_overView}>
        <Text style={styles.overView_totalCash}>
          <Text>${totalCash[0]}.</Text>
          <Text style={styles.numberAfterPoin}>{totalCash[1]}</Text>
        </Text>
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
  overView_actionsUser__block: {
    height: screenWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
    // paddingBottom: 10,
  },
  overView_actionsUser: {
    flexDirection: 'row',
  },
  actionsUser_Info: {
    alignItems: 'flex-start',
    width: '45%',
  },
  actionsUser_name: {
    flexDirection: 'row',
  },
  actionsUser_nameTitle: {
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: 'SFProRounded-Bold',
  },
  actionUser_block: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    marginVertical: 7,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  actionsUser_card: {
    fontWeight: '400',
    paddingLeft: 10,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  actionsUser_icon: {
    width: 13,
    height: 13,
  },
  actionsUser__chevron: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  actionsUser__savedCash_text: {
    paddingTop: 5,
    textAlign: 'center',
    color: 'green',
  },
  overView_providedCash: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '55%',
    paddingRight: 10,
    fontFamily: 'SFProRounded-Bold',
    flexDirection: 'row',
  },
  providedCash_count: {
    fontSize: 18,
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
