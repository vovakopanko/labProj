import {AppStateType} from './../reduxStore';

export const getUserTokenSelector = (state: AppStateType) =>
  state.auth.userToken;

export const getIsLoadingSelector = (state: AppStateType) =>
  state.auth.isLoading;

export const getUserNameSelector = (state: AppStateType) => state.auth.userName;
