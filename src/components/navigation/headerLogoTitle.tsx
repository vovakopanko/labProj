import React, {FC} from 'react';
import {Image, View} from 'react-native';

const HeaderLogoTitle: FC = () => {
  return (
    <View>
      <Image source={require('./../../assets/projectImages/logo.png')} />
    </View>
  );
};

export default HeaderLogoTitle;
