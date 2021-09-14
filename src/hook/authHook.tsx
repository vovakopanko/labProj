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

type UserTokens = string | null;
type userName = string | undefined;

interface useAuth {
  login: (userTokens: UserTokens, userName: userName) => void;
  logout: () => void;
  retrieveUserToken: (userCurrentToken: UserTokens) => void;
  registration: (userCurrentToken: UserTokens) => void;
  userToken: UserTokens;
  name: userName;
  isLoading: boolean | null;
}

export const useAuth = (): useAuth => {
  const dispatch = useDispatch();

  const userToken = useSelector(getUserTokenSelector);
  const name = useSelector(getUserNameSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const login = useCallback(
    async (userTokens: UserTokens, userName: userName) => {
      dispatch(authActions.SignIn(userTokens, userName));
    },
    [],
  );

  const logout = useCallback(async () => {
    dispatch(authActions.SignOut());
    await AsyncStorage.removeItem('userToken');
  }, []);

  const retrieveUserToken = useCallback(
    async (userCurrentToken: UserTokens) => {
      dispatch(authActions.RetrieveToken(userCurrentToken));
    },
    [],
  );

  const registration = useCallback(async (userCurrentToken: UserTokens) => {
    dispatch(authActions.Registration(userCurrentToken));
  }, []);

  return {
    login,
    logout,
    retrieveUserToken,
    userToken,
    name,
    registration,
    isLoading,
  };
};
