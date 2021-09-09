/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authActions} from '../redux/reducers/authReducer';
import {
  getUserTokenSelector,
  getUserNameSelector,
  getIsLoadingSelector,
} from '../redux/reducers/selectors';

export const useAuth = (): any => {
  const dispatch = useDispatch();

  const userToken = useSelector(getUserTokenSelector);
  const name = useSelector(getUserNameSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const login = useCallback(
    async (userTokens: string | null, userName: string | null) => {
      dispatch(authActions.SignIn(userTokens, userName));
    },
    [],
  );

  const logout = useCallback(async () => {
    dispatch(authActions.SignOut());
    await AsyncStorage.removeItem('userToken');
  }, []);

  const retriveUserToken = useCallback(async (userCurrentToken: string) => {
    dispatch(authActions.RetrieveToken(userCurrentToken));
  }, []);

  const registrator = useCallback(async (userCurrentToken: string) => {
    dispatch(authActions.Registrator(userCurrentToken));
  }, []);

  return {
    login,
    logout,
    retriveUserToken,
    userToken,
    name,
    registrator,
    isLoading,
  };
};
