import {InfernActionsType} from './../reduxStore';
const LOGIN = './redux/authRedux/LOGIN';
const LOGOUT = './redux/authRedux/LOGOUT';
const RETRIEVE_TOKEN = './redux/authRedux/RETRIEVE_TOKEN';
const REGISTRATION = './redux/authRedux/REGISTRATION';

type initialState = {
  userLogin: string | undefined;
  password: string | null;
  isLoading: boolean | null;
  userToken: string | null;
};

let initialState: initialState = {
  userLogin: undefined,
  password: null,
  isLoading: false,
  userToken: null,
};

export type initialStateType = typeof initialState;
type ActionType = InfernActionsType<typeof authActions>;

const authReducer = (
  state = initialState,
  action: ActionType,
): initialStateType => {
  switch (action.type) {
    case RETRIEVE_TOKEN: {
      return {
        ...state,
        isLoading: false,
        userToken: action.token,
      };
    }
    case LOGIN: {
      return {
        ...state,
        userLogin: action.id,
        userToken: action.token,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        userLogin: undefined,
        userToken: null,
        isLoading: false,
      };
    }
    case REGISTRATION: {
      return {
        ...state,
        userToken: action.token,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

//Actions
export const authActions = {
  SignIn: (userToken: string | null, userLogin: string | undefined) =>
    <const>{
      type: LOGIN,
      token: userToken,
      id: userLogin,
    },
  SignOut: () => <const>{type: LOGOUT},
  RetrieveToken: (userToken: string | null) =>
    <const>{type: RETRIEVE_TOKEN, token: userToken},
  Registration: (userToken: string | null) =>
    <const>{
      type: REGISTRATION,
      token: userToken,
    },
};

export default authReducer;
