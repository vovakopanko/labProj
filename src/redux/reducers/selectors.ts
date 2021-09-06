import {AppStateType} from './../reduxStore';

export const getUserTokenSelector = (state: AppStateType) =>
  state.auth.userToken;

export const getIsLoadingSelector = (state: AppStateType) =>
  state.auth.isLoading;

export const getUserNameSelector = (state: AppStateType) =>
  state.auth.userLogin;

export const getFullNameUserSelector = (state: AppStateType) =>
  state.profile.fullName;

export const getDateBirthSelector = (state: AppStateType) =>
  state.profile.dateBirth;

export const getPhotoUserSelector = (state: AppStateType) =>
  state.profile.photoUser;

export const getActionsUserWithCash = (state: AppStateType) =>
  state.account.actionsUser;

export const getTypesOfPayments = (state: AppStateType) =>
  state.account.typesOfPayments;
