import {AppStateType} from './../reduxStore';
import {userType} from './authReducer';

export const getUserSelector = (state: AppStateType): userType | null =>
  state.auth.user;
