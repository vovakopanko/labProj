import {InfernActionsType} from './../reduxStore';
const SET_USER_INFO = 'redux_ProfileRedux_setUserInfo';
const GET_USER_NAME = 'redux_ProfileRedux_getUserName';
const SET_NEW_PHOTO = 'redux_ProfileRedux_setNewPhoto';

let initialState = {
  fullName: 'User' as string,
  dateBirth: 'undefined' as string,
  photoUser:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png' as string,
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof profileActions>;

const profileReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        fullName: action.fullName,
        dateBirth: action.dateBirth,
      };
    case GET_USER_NAME:
      return {
        ...state,
        fullName: action.fullName,
      };
    case SET_NEW_PHOTO:
      return {
        ...state,
        photoUser: action.photoUser,
      };
    default:
      return state;
  }
};

//Actions
export const profileActions = {
  SetUserInfo: (fullName: string, dateBirth: string) =>
    <const>{
      type: SET_USER_INFO,
      fullName,
      dateBirth,
    },
  SetNewPhoto: (photoUser: string) => <const>{type: SET_NEW_PHOTO, photoUser},
  getUserName: (fullName: string) =>
    <const>{
      type: GET_USER_NAME,
      fullName,
    },
};

export default profileReducer;
