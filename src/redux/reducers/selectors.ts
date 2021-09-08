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

export const getUserActionsInfo = (state: AppStateType) =>
  state.home.actionsInfo;

export const getUserGiving = (state: AppStateType) => state.home.userGiving;

export const getCheckingCash = (state: AppStateType) =>
  state.home.actionsInfo[0].cash;

export const getAllTransactionsUser = (state: AppStateType) =>
  state.checking.transactions;

export const getSavingCash = (state: AppStateType) =>
  state.home.actionsInfo[1].cash;

export const getGraphTransactionsUser = (state: AppStateType) =>
  state.saving.graph;

export const getTotalInterestGained = (state: AppStateType) =>
  state.saving.totalInterestGained;

export const getGoodnessPoints = (state: AppStateType) =>
  state.saving.goodnessPoints;

export const getLastDataTransactions = (state: AppStateType) =>
  state.saving.date;

export const getTransactionsRawsUser = (state: AppStateType) =>
  state.saving.transactionsRaws;
