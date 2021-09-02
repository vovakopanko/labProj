import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const HeaderLeftBtn: FC = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={styles.btnBack}
        source={require('./../../assets/projectImages/back.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBack: {width: 20, height: 20, marginLeft: 10},
});

export default HeaderLeftBtn;
