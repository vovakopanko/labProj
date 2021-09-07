import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useProfile} from '../../hook/profileHook';

const CurrentTime = () => {
  const currentTime = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const {fullName} = useProfile();
  return (
    <Text style={styles.homePage_titleGreating}>
      {currentTime.getHours() < 11
        ? `Good Morning ${fullName} `
        : currentTime.getHours() >= 11 && currentTime.getHours() < 17
        ? `Good Afternoon ${fullName} `
        : currentTime.getHours() >= 17 && currentTime.getHours() <= 22
        ? `Good Evening ${fullName} `
        : currentTime.getHours() > 22 && currentTime.getHours() <= 5
        ? `Good Night ${fullName} `
        : `Good Morning ${fullName} `}
      |{' '}
      {'Today: ' +
        currentTime.getDate() +
        ' ' +
        monthNames[currentTime.getMonth()] +
        ', ' +
        currentTime.getUTCFullYear()}
    </Text>
  );
};

const styles = StyleSheet.create({
  homePage_titleGreating: {
    fontFamily: 'SFProRounded-Regular',
    color: 'grey',
  },
});

export default CurrentTime;
