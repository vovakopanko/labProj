import React from 'react';
import {
  TouchableHighlight,
  ImageSourcePropType,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

type ActionsUserType = {
  name: string;
  info: string;
  icon: null | ImageSourcePropType;
  cash: number;
  savedCash: boolean;
  clickDisabled: boolean;
  navigation: any;
};

const TotalCurrentActionCash = ({cash}: any) => {
  let val: Array<string> = cash.toFixed(2).split('.');
  return (
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
  );
};

const screenWidth = Dimensions.get('screen').width;

const ActionsUser = ({
  name,
  info,
  cash,
  navigation,
  savedCash,
  clickDisabled,
  icon,
}: ActionsUserType) => {
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
              {icon && <Image source={icon} style={styles.actionsUser_icon} />}
            </View>
            <Text style={styles.actionsUser_card}>{info}</Text>
          </View>
          <TotalCurrentActionCash cash={cash} />
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

const styles = StyleSheet.create({
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
  numberAfterPoin: {
    fontSize: 16,
  },
  actionsUser__chevron: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  actionUser_block: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    marginVertical: 7,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  overView_actionsUser: {
    flexDirection: 'row',
  },
  overView_actionsUser__block: {
    height: screenWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
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
  actionsUser__savedCash_text: {
    paddingTop: 5,
    textAlign: 'center',
    color: 'green',
  },
});

export default ActionsUser;
