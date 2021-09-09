import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {RootAppStackParamsList} from '../../../types';

type ChevronNavigationProp = StackNavigationProp<RootAppStackParamsList>;
interface Props {
  navigation: ChevronNavigationProp;
}

const HeaderLeftBtn: FC<Props> = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
      <Image
        style={styles.btnBack}
        source={require('./../../assets/projectImages/back.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBack: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default HeaderLeftBtn;
