import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderTitle {
  title: string;
  subtitle: string | null;
}

const HeaderAppTitle: FC<HeaderTitle> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

export default HeaderAppTitle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontFamily: 'SFProRounded-Light',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 10,
  },
});
