/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profileActions} from '../redux/reducers/profileReducer';
import {
  getDateBirthSelector,
  getFullNameUserSelector,
  getPhotoUserSelector,
} from '../redux/reducers/selectors';

export const useProfile = (): any => {
  const dispatch = useDispatch();

  const fullName = useSelector(getFullNameUserSelector);
  const dateBirth = useSelector(getDateBirthSelector);
  const userPhoto = useSelector(getPhotoUserSelector);

  const updateUserInfo = useCallback(
    async (fullNameUser: string, dateBirthUser: string) => {
      try {
        await AsyncStorage.setItem('userName', fullNameUser);
        await AsyncStorage.setItem('userDateBirth', dateBirthUser);
      } catch (e) {
        console.log(e);
      }
      dispatch(profileActions.SetUserInfo(fullNameUser, dateBirthUser));
    },
    [],
  );

  const getUserName = useCallback(async (userCurrentName: string) => {
    dispatch(profileActions.getUserName(userCurrentName));
  }, []);

  const updateUserPhoto = useCallback(async (photoUser: string) => {
    dispatch(profileActions.SetNewPhoto(photoUser));
    try {
      await AsyncStorage.setItem('userPhoto', photoUser);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    updateUserInfo,
    updateUserPhoto,
    // getDataUser,
    fullName,
    userPhoto,
    dateBirth,
    getUserName,
  };
};
