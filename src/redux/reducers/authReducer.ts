import {InfernActionsType} from './../reduxStore';
const LOGIN = './redux/authRedux/LOGIN';
const LOGOUT = './redux/authRedux/LOGOUT';
const RETRIEVE_TOKEN = './redux/authRedux/RETRIEVE_TOKEN';
const REGISTRATOR = './redux/authRedux/REGISTRATOR';

let initialState = {
  userName: null as string | null,
  password: null as string | null,
  isLoading: true,
  userToken: null as string | null,
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
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    }
    case REGISTRATOR: {
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

//Actions
export const authActions = {
  SignIn: (userToken: string | null, userName: string | null) =>
    <const>{
      type: LOGIN,
      token: userToken,
      id: userName,
    },
  SignOut: () => <const>{type: LOGOUT},
  Registrator: (userToken: string, userName: string) =>
    <const>{
      type: REGISTRATOR,
      token: userToken,
      id: userName,
    },
  RetrieveToken: (userToken: string) =>
    <const>{type: RETRIEVE_TOKEN, token: userToken},
};

export default authReducer;
