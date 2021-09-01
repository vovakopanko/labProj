/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authActions} from '../redux/reducers/authReducer';
import {
  getUserTokenSelector,
  getIsLoadingSelector,
  getUserNameSelector,
} from '../redux/reducers/selectors';

export const useAuth = (): any => {
  const dispatch = useDispatch();

  const userToken = useSelector(getUserTokenSelector);
  const isLoading = useSelector(getIsLoadingSelector);
  const name = useSelector(getUserNameSelector);

  const login = useCallback(async (userTokens: string, userName: string) => {
    dispatch(authActions.SignIn(userTokens, userName));
  }, []);

  const logout = useCallback(async () => {
    dispatch(authActions.SignOut());
    await AsyncStorage.removeItem('userToken');
  }, []);

  const retriveUserToken = useCallback(async (userTokens: string) => {
    dispatch(authActions.RetrieveToken(userTokens));
  }, []);

  return {
    login,
    logout,
    retriveUserToken,
    userToken,
    isLoading,
    name,
  };
};
