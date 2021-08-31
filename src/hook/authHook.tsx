/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authActions} from '../redux/reducers/authReducer';
import {
  getUserTokenSelector,
  getIsLoadingSelector,
} from '../redux/reducers/selectors';

export const useAuth = (): any => {
  const dispatch = useDispatch();

  const userToken = useSelector(getUserTokenSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const login = useCallback(async (userToken: string, userName: string) => {
    dispatch(authActions.SignIn(userToken, userName));
    // await AsyncStorage.setItem('auth', JSON.stringify(userToken, userName));
  }, []);

  const logout = useCallback(async () => {
    dispatch(authActions.SignOut());
    await AsyncStorage.removeItem('userToken');
  }, []);

  const retriveUserToken = useCallback(async (userToken: string) => {
    dispatch(authActions.RetrieveToken(userToken));
  }, []);

  return {
    login,
    logout,
    retriveUserToken,
    userToken,
    isLoading,
  };
};
