import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  // Dimensions,
} from 'react-native';

export type ActionsUser = {
  name: string;
  info: string;
  icon: null | ImageSourcePropType;
  cash: number;
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

const CurrentActions = ({name, info, cash, navigation, icon}: ActionsUser) => {
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
          <View style={styles.actionsUser_name}>
            <Text style={styles.actionsUser_nameTitle}>{name}</Text>
            {icon ? (
              <Image source={icon} style={styles.actionsUser_icon} />
            ) : null}
          </View>
          <Text style={styles.actionsUser_card}>{info}</Text>
        </View>
        <TotalCurrentActionCash cash={cash} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
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
    width: '40%',
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
  actionsUser_icon: {
    width: 13,
    height: 13,
  },
  actionsUser_card: {
    fontWeight: '400',
    paddingLeft: 10,
    color: 'grey',
    fontFamily: 'SFProRounded-Light',
  },
  overView_providedCash: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '60%',
    paddingRight: 10,
    fontFamily: 'SFProRounded-Bold',
    flexDirection: 'row',
  },
  providedCash_count: {
    fontSize: 19,
  },
  numberAfterPoin: {
    fontSize: 16,
  },
  actionsUser__chevron: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
});

export default CurrentActions;
