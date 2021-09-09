/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {profileActions} from '../redux/reducers/profileReducer';
import {
  getDateBirthSelector,
  getFullNameUserSelector,
  getPhotoUserSelector,
} from '../redux/reducers/selectors';
interface useProfile {
  fullName: string;
  dateBirth: string;
  userPhoto: string;
  updateUserInfo: (fullNameUser: string, dateBirthUser: string) => void;
  updateUserPhoto: (photoUser: string) => void;
}

export const useProfile = (): useProfile => {
  const dispatch = useDispatch();

  const fullName = useSelector(getFullNameUserSelector);
  const dateBirth = useSelector(getDateBirthSelector);
  const userPhoto = useSelector(getPhotoUserSelector);

  const updateUserInfo = useCallback(
    async (fullNameUser: string, dateBirthUser: string) => {
      dispatch(profileActions.SetUserInfo(fullNameUser, dateBirthUser));
      //test
      console.log(`Hooc: ${fullNameUser}, ${dateBirthUser}`);
    },
    [],
  );

  const updateUserPhoto = useCallback(async (photoUser: string) => {
    dispatch(profileActions.SetNewPhoto(photoUser));
  }, []);

  return {
    updateUserInfo,
    updateUserPhoto,
    fullName,
    userPhoto,
    dateBirth,
  };
};
